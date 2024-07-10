uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;

varying float vElevation;

void main(){

  float mixOffset = 0.1;
  float mixMultiplier = 0.9;

  float mixStrength = (vElevation + mixOffset) * mixMultiplier;

  vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);
  gl_FragColor = vec4(color , 1.0);
  #include <colorspace_fragment>
}