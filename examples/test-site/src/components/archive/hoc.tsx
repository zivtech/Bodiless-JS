/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Since this file is for demo purposes
// let's disable some eslint rules.
/* eslint-disable @typescript-eslint/no-unused-vars */
/* tslint:disable max-line-length */
import React, { ComponentType } from 'react';

interface Classable {
  className?: string;
}

// This demonstrates the problem. I would expect destructuring className and rest
// out of type P and then putting them both back on the component would work. But instead:
// Type '{ className: string; } & Pick<P, Exclude<keyof P, "className">>' is
// not assignable to type 'IntrinsicAttributes & P & { children?: ReactNode; }'.
// The error flags line 15: (return <Component...)
const withFoo1 = <P extends Classable>(
  Component: ComponentType<P>,
): ComponentType<P> => {
  const newComponent = ({ className, ...rest }: P) => (
    <Component className={`${className} foo`} {...rest} />
  );
  return newComponent;
};

// This makes it even clearer...  Same error on line 24
const withFoo1a = <P extends Classable>(
  Component: ComponentType<P>,
): ComponentType<P> => {
  const newComponent = (props: P) => {
    const { className, ...rest } = props;
    const newProps: P = { className: `${className} foo`, ...rest };
    return <Component {...newProps} />;
  };
  return newComponent;
};

// But this works. It's satisfied bc we are giving it an object of type P.
const withFoo2 = <P extends Classable>(
  Component: ComponentType<P>,
): ComponentType<P> => {
  const newComponent = (props: P) => {
    const { className } = props;
    return <Component {...props} className={`${className} foo`} />;
  };
  return newComponent;
};

// We can clean it up a bit by modifying 1a with a type cast
const withFoo2a = <P extends Classable>(
  Component: ComponentType<P>,
): ComponentType<P> => {
  const newComponent = (props: P) => {
    const { className, ...rest } = props;
    const newProps = { className: `${className} foo`, ...rest } as P;
    return <Component {...newProps} />;
  };
  return newComponent;
};

// And we can even do this inline on the component.
const withFoo2b = <P extends Classable>(
  Component: ComponentType<P>,
): ComponentType<P> => {
  const newComponent = ({ className, ...rest }: P) => (
    <Component className={`${className} foo`} {...rest as P} />
  );
  return newComponent;
};

// This version also does not create an error, but makes problems for usage - see below.
const withFoo3 = <P extends Classable>(
  Component: ComponentType<Classable>,
): ComponentType<P> => {
  const newComponent = ({ className, ...rest }: P) => (
    <Component className={`${className} foo`} {...rest} />
  );
  return newComponent;
};

interface BarProps {
  className?: string;
  who?: string;
}

const Bar = ({ who, ...rest }: BarProps) => (
  <div>
    Hello
    {who}
  </div>
);

// All the variants work with and without a className prop.
const FooBar2 = withFoo2(Bar);
const FooBar2a = withFoo2a(Bar);
const FooBar2b = withFoo2b(Bar);
const UseFooBar2 = () => <FooBar2 who="me" className="ladida" />;
const UseFooBar2a = () => <FooBar2a who="me" className="ladida" />;
const UseFooBar2b = () => <FooBar2b who="me" className="ladida" />;
const UseFooBar$2 = () => <FooBar2 who="me" />;
const UseFooBar$2a = () => <FooBar2a who="me" />;
const UseFooBar$2b = () => <FooBar2b who="me" />;

// Note that we can't use FooBar3 alone bc the returned object's type can't be inferred
const FooBar3 = withFoo3(Bar);
const UseFooBar3 = () => <FooBar3 who="me" className="ladida" />; // Error!:
// Type '{ who: string; className: string; }' is not assignable to type
// 'IntrinsicAttributes & { children?: ReactNode; }'.
// Property 'who' does not exist on type 'IntrinsicAttributes & { children?: ReactNode; }'.

// But we can use it if we make the generic explicit
const FooBar3a = withFoo3<BarProps>(Bar);
const UseFooBar3a = () => <FooBar3a who="me" className="ladida" />;
