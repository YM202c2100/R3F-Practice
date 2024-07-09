uniform float uWaveFreqX;
uniform float uWaveFreqZ;
uniform float uWaveElevation;

void main(){
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y = sin(modelPosition.x * uWaveFreqX ) *
                    sin(modelPosition.z * uWaveFreqZ) *
                    uWaveElevation;
  
  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}