# Griddie

> Grid component library for [React][react].

<!-- ## Documentation
See the [documentation][documentation] with examples and API documentation. -->

### Why?

There are already some great grid packages out there (AntD-Grid, Bootstrap, Material-D). they all have there strong points. But i usually ended up with custom components with a lot of edge cases. And i needed to install a hole framework.
Sometimes i even ended up with installing 2 grid systems/frameworks to make the best of it.

### Installation

> `yarn add @zerodp/griddie` or `npm install @zerodp/griddie`

Typings and declarations included

### Features

- No css files and no config needed
- 0 dependencies! other then `React` for Smaller bundle size
- Responsive `Container` or only reponsive on specific breakpoints
- Responsive vertical and horizontal gutters per breakpoint [example][example]
- Responsive offset, push, pull and order per breakpoint
- Configurable column layout per `Row` [example][example]
- `useBreakpoints` hook (using `window.matchMedia` and not `window.resize`! for better performance)
- global configuration for cummon used settings

### Examples

---

#### Basic example

Basic implementation for basic usage.

Use:`gutter{[30]}` array prop for vertical and horizontal gutters or use:`gutter{30}` number prop if you only want horizontal gutters.

If you want independent [vertical, horizontal] gutters you can use:`gutter{[15, 30]}`

```js
import { Container, Row, Col } from "@zerodp/griddie";

const App = () => {
  return (
    <Container>
      <Row gutter={[30]}>
        <Col xs={12} md={6} xl={3}>
          <div>Col 1</div>
        </Col>
        <Col xs={12} md={6} xl={3}>
          <div>Col 2</div>
        </Col>
        <Col xs={12} md={6} xl={3}>
          <div>Col 3</div>
        </Col>
        <Col xs={12} md={6} xl={3}>
          <div>Col 4</div>
        </Col>
      </Row>
    </Container>
  );
};
```

#### Auto columns

Use the `auto` prop to automatically fit columns without breakpoints.
Col 2, 3 and 4 will automatically fit the available row space

```js
import { Container, Row, Col } from "@zerodp/griddie";

const App = () => {
  return (
    <Container>
      <Row gutter={[30]} auto>
        <Col xs={12} md={6} xl={3}>
          <div>Col 1</div>
        </Col>
        <Col>
          <div>Col 2</div>
        </Col>
        <Col>
          <div>Col 3</div>
        </Col>
        <Col>
          <div>Col 4</div>
        </Col>
      </Row>
    </Container>
  );
};
```

#### Responsive width

Use the `fluid` prop on `Container` to make the container fill the width of the screen.

You can set specific breakpoints to only use 100% width on those breakpoints.

```js
import { Container, Row, Col } from "@zerodp/griddie";

const App = () => {
  return (
    <Container fluid xs sm md>
      <Row gutter={[30]}>
        <Col xs={12}>
          <ColContent />
        </Col>
      </Row>
    </Container>
  );
};
```

#### Responsive gutters

```js
import { Container, Row, Col } from "@zerodp/griddie";

const App = () => {
  return (
    <Container>
      <Row gutter={[30]}>
        <Col xs={12} md={6} xl={3}>
          <ColContent />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <ColContent />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <ColContent />
        </Col>
        <Col xs={12} md={6} xl={3}>
          <ColContent />
        </Col>
      </Row>
    </Container>
  );
};
```

[react]: https://reactjs.org/
[documentation]: https://google.com/
[example]: https://google.com/
