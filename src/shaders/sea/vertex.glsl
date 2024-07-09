void main(){
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y = sin(modelPosition.x * 4.0) *
                    sin(modelPosition.z * 4.0) *
                    0.2;
  
  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}