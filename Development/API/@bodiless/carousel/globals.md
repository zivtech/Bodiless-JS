[@bodiless/carousel](README.md) › [Globals](globals.md)

# @bodiless/carousel

## Index

### Type aliases

* [CarouselComponents](globals.md#carouselcomponents)
* [CarouselProps](globals.md#carouselprops)

### Variables

* [CarouselClean](globals.md#const-carouselclean)
* [asAccessibleCarousel](globals.md#const-asaccessiblecarousel)
* [asAccessibleCarouselButton](globals.md#const-asaccessiblecarouselbutton)
* [withAriaSelectedCarouselItem](globals.md#const-withariaselectedcarouselitem)
* [withAutoPlayButton](globals.md#const-withautoplaybutton)
* [withInfinitiveLoop](globals.md#const-withinfinitiveloop)
* [withIntrinsicHeight](globals.md#const-withintrinsicheight)
* [withNavigationButtons](globals.md#const-withnavigationbuttons)
* [withNoDragIfEditable](globals.md#const-withnodragifeditable)

### Functions

* [CarouselBase](globals.md#const-carouselbase)
* [CarouselDot](globals.md#const-carouseldot)
* [asEditableCarousel](globals.md#const-aseditablecarousel)
* [useCarouselCurrentSlide](globals.md#const-usecarouselcurrentslide)
* [useCarouselIsPlaying](globals.md#const-usecarouselisplaying)
* [useCarouselSlideIndex](globals.md#const-usecarouselslideindex)
* [useCarouselState](globals.md#const-usecarouselstate)
* [useIsCarouselItemActive](globals.md#const-useiscarouselitemactive)
* [withAutoPlayInterval](globals.md#const-withautoplayinterval)
* [withCarouselDots](globals.md#const-withcarouseldots)
* [withCarouselItemTabIndex](globals.md#const-withcarouselitemtabindex)
* [withTotalSlides](globals.md#const-withtotalslides)

### Object literals

* [carouselComponents](globals.md#const-carouselcomponents)

## Type aliases

###  CarouselComponents

Ƭ **CarouselComponents**: *object*

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:28](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L28)*

#### Type declaration:

* **ButtonBack**: *ComponentType‹any›*

* **ButtonNext**: *ComponentType‹any›*

* **ButtonPlay**: *ComponentType‹any›*

* **ControlsWrapper**: *ComponentType‹any›*

* **Dots**: *ComponentType‹any›*

* **Slide**: *ComponentType‹any›*

* **Slider**: *ComponentType‹any›*

* **SliderWrapper**: *ComponentType‹any›*

* **Wrapper**: *ComponentType‹any›*

___

###  CarouselProps

Ƭ **CarouselProps**: *DesignableComponentsProps‹[CarouselComponents](globals.md#carouselcomponents)›*

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:52](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L52)*

## Variables

### `Const` CarouselClean

• **CarouselClean**: *ComponentClass‹object & object, any› | FunctionComponent‹object & object›* = designable(carouselComponents, 'Carousel')(CarouselBase)

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:71](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L71)*

___

### `Const` asAccessibleCarousel

• **asAccessibleCarousel**: *function & object* = withDesign({
  Slider: flow(
    addProps({
      tabIndex: 'auto',
    }),
    withDesign({
      Item: flow(
        withCarouselItemTabIndex,
        withAriaSelectedCarouselItem,
      ),
    }),
  ),
  ButtonBack: asAccessibleCarouselButton,
  ButtonNext: asAccessibleCarouselButton,
  Dots: withDesign({
    Item: flow(
      withAriaSelectedCarouselItem,
      addProps({
        'aria-hidden': false,
        role: 'presentation',
      }),
      withDesign({
        Dot: asAccessibleCarouselButton,
      }),
    ),
  }),
  ButtonPlay: asAccessibleCarouselButton,
})

*Defined in [packages/bodiless-carousel/src/components/token.tsx:112](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/token.tsx#L112)*

___

### `Const` asAccessibleCarouselButton

• **asAccessibleCarouselButton**: *function* = flow(
  addProps({
    role: 'button',
  }),
)

*Defined in [packages/bodiless-carousel/src/components/token.tsx:95](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/token.tsx#L95)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withAriaSelectedCarouselItem

• **withAriaSelectedCarouselItem**: *function* = flow(
  addPropsIf(useIsCarouselItemActive)({
    'aria-selected': true,
    'aria-hidden': false,
  }),
  addPropsIf(negate(useIsCarouselItemActive))({
    'aria-selected': false,
    'aria-hidden': true,
  }),
)

*Defined in [packages/bodiless-carousel/src/components/token.tsx:101](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/token.tsx#L101)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withAutoPlayButton

• **withAutoPlayButton**: *function & object* = withDesign({
  ButtonPlay: replaceWith(stylable(ButtonPlay)),
})

*Defined in [packages/bodiless-carousel/src/components/token.tsx:79](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/token.tsx#L79)*

___

### `Const` withInfinitiveLoop

• **withInfinitiveLoop**: *function & object* = withDesign({
  Wrapper: addProps({
    infinite: true,
  }),
})

*Defined in [packages/bodiless-carousel/src/components/token.tsx:52](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/token.tsx#L52)*

___

### `Const` withIntrinsicHeight

• **withIntrinsicHeight**: *function & object* = withDesign({
  Wrapper: addProps({
    isIntrinsicHeight: true,
  }),
})

*Defined in [packages/bodiless-carousel/src/components/token.tsx:38](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/token.tsx#L38)*

___

### `Const` withNavigationButtons

• **withNavigationButtons**: *function & object* = withDesign({
  ButtonBack: replaceWith(stylable(ButtonBack)),
  ButtonNext: replaceWith(stylable(ButtonNext)),
})

*Defined in [packages/bodiless-carousel/src/components/token.tsx:74](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/token.tsx#L74)*

___

### `Const` withNoDragIfEditable

• **withNoDragIfEditable**: *function & object* = withDesign({
  Wrapper: ifEditable(
    addProps({
      dragEnabled: false,
    }),
  ),
})

*Defined in [packages/bodiless-carousel/src/components/token.tsx:44](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/token.tsx#L44)*

## Functions

### `Const` CarouselBase

▸ **CarouselBase**(`props`: [CarouselProps](globals.md#carouselprops)): *Element‹›*

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:54](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CarouselProps](globals.md#carouselprops) |

**Returns:** *Element‹›*

___

### `Const` CarouselDot

▸ **CarouselDot**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-carousel/src/components/CarouselDot.tsx:19](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselDot.tsx#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` asEditableCarousel

▸ **asEditableCarousel**(`nodeKeys?`: WithNodeKeyProps): *function*

*Defined in [packages/bodiless-carousel/src/components/asEditableCarousel.ts:24](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/asEditableCarousel.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKeys?` | WithNodeKeyProps |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` useCarouselCurrentSlide

▸ **useCarouselCurrentSlide**(): *number*

*Defined in [packages/bodiless-carousel/src/components/hooks.ts:36](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/hooks.ts#L36)*

**Returns:** *number*

___

### `Const` useCarouselIsPlaying

▸ **useCarouselIsPlaying**(): *any*

*Defined in [packages/bodiless-carousel/src/components/hooks.ts:42](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/hooks.ts#L42)*

type gap in the contrib library

**`todo`** suggest a patch to the contrib library

**Returns:** *any*

___

### `Const` useCarouselSlideIndex

▸ **useCarouselSlideIndex**(): *number*

*Defined in [packages/bodiless-carousel/src/components/hooks.ts:44](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/hooks.ts#L44)*

**Returns:** *number*

___

### `Const` useCarouselState

▸ **useCarouselState**(): *CarouselState*

*Defined in [packages/bodiless-carousel/src/components/hooks.ts:23](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/hooks.ts#L23)*

implemented per pure-react-carousel doc

**`see`** https://github.com/express-labs/pure-react-carousel#hooks-and-usecontext

**Returns:** *CarouselState*

___

### `Const` useIsCarouselItemActive

▸ **useIsCarouselItemActive**(): *boolean*

*Defined in [packages/bodiless-carousel/src/components/hooks.ts:49](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/hooks.ts#L49)*

**Returns:** *boolean*

___

### `Const` withAutoPlayInterval

▸ **withAutoPlayInterval**(`interval`: number): *function & object*

*Defined in [packages/bodiless-carousel/src/components/token.tsx:83](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/token.tsx#L83)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`interval` | number | 3000 |

**Returns:** *function & object*

___

### `Const` withCarouselDots

▸ **withCarouselDots**(`nodeKeys?`: WithNodeKeyProps): *function*

*Defined in [packages/bodiless-carousel/src/components/token.tsx:58](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/token.tsx#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKeys?` | WithNodeKeyProps |

**Returns:** *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

### `Const` withCarouselItemTabIndex

▸ **withCarouselItemTabIndex**(`Component`: ComponentType): *(Anonymous function)*

*Defined in [packages/bodiless-carousel/src/components/token.tsx:89](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/token.tsx#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | ComponentType |

**Returns:** *(Anonymous function)*

___

### `Const` withTotalSlides

▸ **withTotalSlides**(`nodeKeys?`: WithNodeKeyProps): *(Anonymous function)*

*Defined in [packages/bodiless-carousel/src/components/withTotalSlides.tsx:22](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/withTotalSlides.tsx#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`nodeKeys?` | WithNodeKeyProps |

**Returns:** *(Anonymous function)*

## Object literals

### `Const` carouselComponents

### ▪ **carouselComponents**: *object*

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:40](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L40)*

###  ButtonBack

• **ButtonBack**: *ExoticComponent‹object›* = Fragment

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:47](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L47)*

###  ButtonNext

• **ButtonNext**: *ExoticComponent‹object›* = Fragment

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:48](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L48)*

###  ButtonPlay

• **ButtonPlay**: *ExoticComponent‹object›* = Fragment

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:49](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L49)*

###  ControlsWrapper

• **ControlsWrapper**: *object* = Div

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:45](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L45)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLDivElement› & object & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLDivElement› & object & object |

* **displayName**: *string*

###  Dots

• **Dots**: *ExoticComponent‹object›* = Fragment

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:46](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L46)*

###  Slide

• **Slide**: *ComponentClass‹SlideProps‹›, any›*

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:44](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L44)*

###  Slider

• **Slider**: *object* = stylable(Slider)

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:43](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L43)*

#### Type declaration:

▸ (`props`: P & StylableProps & ForwardRefProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps & ForwardRefProps |

* **displayName**: *string*

###  SliderWrapper

• **SliderWrapper**: *object* = Div

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:42](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L42)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLDivElement› & object & object): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLDivElement› & object & object |

* **displayName**: *string*

###  Wrapper

• **Wrapper**: *object* = stylable(CarouselProvider)

*Defined in [packages/bodiless-carousel/src/components/CarouselClean.tsx:41](https://github.com/johnsonandjohnson/Bodiless-JS/blob/93d83cce/packages/bodiless-carousel/src/components/CarouselClean.tsx#L41)*

#### Type declaration:

▸ (`props`: P & StylableProps & ForwardRefProps): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | P & StylableProps & ForwardRefProps |

* **displayName**: *string*
