uniform float uWaveFreqX;
uniform float uWaveFreqZ;
uniform float uWaveElevation;
uniform float uTime;

varying float vElevation;

void main(){
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  float elevation = sin(modelPosition.x * uWaveFreqX + uTime*0.8) *
                    sin(modelPosition.z * uWaveFreqZ + uTime*0.5) *
                    uWaveElevation;

  modelPosition.y += elevation;

  vElevation = elevation;
  
  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}