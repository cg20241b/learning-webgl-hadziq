precision mediump float;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D uSampler;
uniform vec3 uAmbientLight;

void main(void) {
    vec4 lighting = vec4(uAmbientLight, 1.0);
    gl_FragColor = vColor * lighting * texture2D(uSampler, vTextureCoord);
}