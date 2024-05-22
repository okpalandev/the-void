import "./vector.js";

const Camera = {};
function Camera2D(position,zoom) {
  this.position = new Vector.Vec2(position);
  this.zoom = zoom;
}

Camera2D.prototype.project = function (){
    const position = this.position; 
    const zoom = this.zoom;
    const x0 = position.x, y0 = position.y;
    const x1 = position.x + zoom, y1 = (position.y / x0) * zoom;
    this.position = new Vector.Vec2(x1,y1);
    return this;
}

Camera["Camera2D"] = Camera2D;
function Camera3D(position,zoom) {
        this.position = new Vector.Vec3(position);
        this.zoom = zoom;
}

Camera3D.prototype.project = function(cameraPosition, scalingFactor, viewportWidth, viewportHeight) {
        // Calculate the vector from the camera position to this point
        const cameraToPoint = new Vector.Vec3(
            this.position.x - cameraPosition.x,
            this.position.y - cameraPosition.y,
            this.position.z - cameraPosition.z
        );
        // Assuming the camera is looking directly at the point, 
        // the projected point onto the 2D plane is the x and y components of cameraToPoint
        // Adjust these components based on the scaling factor to keep the perspective
        const projectedX = (cameraToPoint.x / cameraToPoint.z) * scalingFactor + (viewportWidth / 2);
        const projectedY = (cameraToPoint.y / cameraToPoint.z) * scalingFactor + (viewportHeight / 2);
        // Return a Vec2 with the projected coordinates
        return new Vector.Vec2(projectedX, projectedY);
};



Camera['Camera3D'] = Camera3D;
export { Camera}