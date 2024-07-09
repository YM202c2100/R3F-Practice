uniform float uWaveFreqX;
uniform float uWaveFreqZ;
uniform float uWaveElevation;

varying float vElevation;

void main(){
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  float elevation = sin(modelPosition.x * uWaveFreqX) *
                    sin(modelPosition.z * uWaveFreqZ) *
                    uWaveElevation;

  modelPosition.y += elevation;

  vElevation = elevation;
  
  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}