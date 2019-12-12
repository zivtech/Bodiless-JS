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

interface Fooable {
  foo: string;
}

function fooTheClass(foo = '', className = ''): string {
  // this is a simplified example..
  return className ? `$(className) ${foo}` : foo;
}

const withFoo = <P extends Classable>(
  Component: ComponentType<P>,
): ComponentType<P & Fooable> => {
  const newComponent = ({ foo, className, ...rest }: P & Fooable) => (
    <Component className={fooTheClass(foo, className)} {...rest} />
  );
  return newComponent;
};

const withFoo1 = <P extends Classable>(
  Component: ComponentType<P>,
): ComponentType<P & Fooable> => {
  const newComponent = (props: P & Fooable) => {
    const { ...rest } = props;
    rest.className = fooTheClass(rest.foo, rest.className);
    delete rest.foo;
    return <Component {...rest} />;
  };
  return newComponent;
};

const withFoo2 = <P extends Classable>(
  Component: ComponentType<P>,
): ComponentType<P & Fooable> => {
  const newComponent = ({ foo, className, ...rest }: P & Fooable) => (
    <Component
      className={fooTheClass(foo, className)}
      {...(rest as unknown) as P}
    />
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
const FooBar = withFoo(Bar);
const UseFooBar2 = () => <FooBar who="me" className="ladida" foo="foo" />;
