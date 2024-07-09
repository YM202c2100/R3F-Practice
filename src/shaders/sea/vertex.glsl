uniform float uTime;

varying float vElevation;

#include "./LygiaLibrary/genrative/cnoise.glsl"

void main(){
  float uWaveFreqX = 3.5;
  float uWaveFreqZ = 2.0;
  float uWaveElevation = 0.2;
  float waveBumpyFreq = 3.5;
  float waveBumpySpeed = 0.5;
  float waveBumpyElevation = 0.15;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  float elevation = sin(modelPosition.x * uWaveFreqX + uTime*0.8) *
                    sin(modelPosition.z * uWaveFreqZ + uTime*0.5) *
                    uWaveElevation;
  
  for(float i=1.0; i<4.0; i++){
    elevation -= abs(cnoise(vec3(modelPosition.xz * waveBumpyFreq, uTime * waveBumpySpeed)) * waveBumpyElevation);
  }

  modelPosition.y += elevation;

  vElevation = elevation;
  
  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}