import React from "react";
import pencilpic from "../assets/pencil-sketch.png";
import imagepng2 from "../assets/high-fidelity-wireframes.png";
import imagepng3 from "../assets/pixel-perfect-mockups.jpg";

export function UIUXFeatures() {
  return (
    <div
      className="june_main_container_images"
      style={{
        paddingBottom: 0,
      }}
    >
      <div className="june_first_container_images">
        <img
          className="june_first_container_images_one"
          src={pencilpic}
          alt="s"
        />
        <div className="june_main_container_images_content_main">
          <div className="june_second_container_images_one_content_container">
            <div className="june_main_container_images_content_One">
              Pencil sketch
            </div>
            <div className="june_main_container_images_content_two">
              Back of the napkin designs
            </div>
          </div>
        </div>
      </div>
      <div className="june_first_container_images">
        <img
          className="june_first_container_images_one"
          src={imagepng2}
          alt="s"
        />
        <div className="june_main_container_images_content_main">
          <div className="june_second_container_images_one_content_container">
            <div className="june_main_container_images_content_One">
              High Fidelity Wireframes
            </div>
            <div className="june_main_container_images_content_two">
              More realistic content closer to the end result.
            </div>
          </div>
        </div>
      </div>
      <div className="june_first_container_images">
        <img
          className="june_first_container_images_one"
          src={imagepng3}
          alt="s"
        />
        <div className="june_main_container_images_content_main">
          <div className="june_second_container_images_one_content_container">
            <div className="june_main_container_images_content_One">
              Pixel Perfect Mockups
            </div>
            <div className="june_main_container_images_content_two">
              Fully visualize the look and feel of your final product.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
