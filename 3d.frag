precision mediump float;
varying vec2 vTextureCoord;
varying vec4 vColor;
varying vec3 vPosition;
varying vec3 vNormal;

uniform sampler2D uSampler;
uniform vec3 uAmbientLight;
uniform vec3 uDiffuseLightColor; // Add this line
//uniform vec3 uDirectionalLightDirection; // Add this line
uniform vec3 uPointLightPosition; // Add this line

void main(void) {
    // Normalize the normal vector
    vec3 normal = normalize(vNormal);

    // Calculate the diffuse light effect
    vec3 lightDirection = normalize( uPointLightPosition - vPosition);
    float diffuseLightIntensity = max(dot(normal, lightDirection), 0.0);
    vec3 diffuseLight = uDiffuseLightColor * diffuseLightIntensity;

    // Combine the ambient and directional light
    vec4 lighting = vec4(uAmbientLight + diffuseLight, 1.0);
    gl_FragColor = vColor * lighting * texture2D(uSampler, vTextureCoord);
}