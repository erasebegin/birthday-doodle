// taken from this example https://codesandbox.io/s/w12qznzx5 by prtjohanson

import React, { Component } from "react";
import { Stage, Layer, Rect, Line, Circle, Arrow } from "react-konva";

class Drawable {
  constructor(startx, starty) {
    this.startx = startx;
    this.starty = starty;
  }
}
class ArrowDrawable extends Drawable {
  constructor(startx, starty) {
    super(startx, starty);
    this.x = startx;
    this.y = starty;
  }
  registerMovement(x, y) {
    this.x = x;
    this.y = y;
  }
  render() {
    const points = [this.startx, this.starty, this.x, this.y];
    return <Arrow points={points} fill="black" stroke="black" />;
  }
}

class CircleDrawable extends ArrowDrawable {
  constructor(startx, starty) {
    super(startx, starty);
    this.x = startx;
    this.y = starty;
  }
  render() {
    const dx = this.startx - this.x;
    const dy = this.starty - this.y;
    const radius = Math.sqrt(dx * dx + dy * dy);
    return (
      <Circle radius={radius} x={this.startx} y={this.starty} stroke="black" />
    );
  }
}

class RectDrawable extends ArrowDrawable {
  constructor(startx, starty) {
    super(startx, starty);
    this.x = startx;
    this.y = starty;
  }
  render() {
    const dx = this.startx - this.x;
    const dy = this.starty - this.y;
    return (
      <Rect
        height={dy}
        width={dx}
        x={this.startx}
        y={this.starty}
        stroke="black"
      />
    );
  }
}

class FreePathDrawable extends Drawable {
  constructor(startx, starty) {
    super(startx, starty);
    this.points = [startx, starty];
  }
  registerMovement(x, y) {
    this.points = [...this.points, x, y];
  }
  render() {
    return <Line points={this.points} fill="black" stroke="black" />;
  }
}

class SceneWithDrawables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawables: [],
      newDrawable: [],
      newDrawableType: "FreePathDrawable"
    };
  }

  getNewDrawableBasedOnType = (x, y, type) => {
    const drawableClasses = {
      FreePathDrawable,
      ArrowDrawable,
      CircleDrawable,
      RectDrawable
    };
    return new drawableClasses[type](x, y);
  };

  handleMouseDown = e => {
    const { newDrawable } = this.state;
    if (newDrawable.length === 0) {
      const { x, y } = e.target.getStage().getPointerPosition();
      const newDrawable = this.getNewDrawableBasedOnType(
        x,
        y,
        this.state.newDrawableType
      );
      this.setState({
        newDrawable: [newDrawable]
      });
    }
  };

  handleMouseUp = e => {
    const { newDrawable, drawables } = this.state;
    if (newDrawable.length === 1) {
      const { x, y } = e.target.getStage().getPointerPosition();
      const drawableToAdd = newDrawable[0];
      drawableToAdd.registerMovement(x, y);
      drawables.push(drawableToAdd);
      this.setState({
        newDrawable: [],
        drawables
      });
    }
  };

  handleMouseMove = e => {
    const { newDrawable } = this.state;
    if (newDrawable.length === 1) {
      const { x, y } = e.target.getStage().getPointerPosition();
      const updatedNewDrawable = newDrawable[0];
      updatedNewDrawable.registerMovement(x, y);
      this.setState({
        newDrawable: [updatedNewDrawable]
      });
    }
  };

  render() {
    const drawables = [...this.state.drawables, ...this.state.newDrawable];
    return (
      <div>
        <button
          onClick={e => {
            this.setState({ newDrawableType: "ArrowDrawable" });
          }}
        >
          Draw Arrows
        </button>
        <button
          onClick={e => {
            this.setState({ newDrawableType: "CircleDrawable" });
          }}
        >
          Draw Circles
        </button>
        <button
          onClick={e => {
            this.setState({ newDrawableType: "FreePathDrawable" });
          }}
        >
          Draw FreeHand
        </button>
        <button
          onClick={e => {
            this.setState({ newDrawableType: "RectDrawable" });
          }}
        >
          Draw Rectangles
        </button>
        <Stage
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onTouchEnd={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
          onTouchMove={this.handleMouseMove}
          width={900}
          height={700}
        >
          <Layer>
            {drawables.map(drawable => {
              return drawable.render();
            })}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default SceneWithDrawables;
