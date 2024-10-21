precision mediump float;
varying vec2 vTextureCoord;
varying vec4 vColor;
varying vec3 vPosition;
varying vec3 vNormal;

uniform sampler2D uSampler;
uniform vec3 uAmbientLight; // ka in the phong model equation
uniform vec3 uDiffuseLightColor; // kd in the phong model equation
//uniform vec3 uDirectionalLightDirection; // Add this line
uniform vec3 uPointLightPosition; // Add this line

void main(void) {
    // Normalize the normal vector
    vec3 N = normalize(vNormal);

    // Calculate the ambient light effect
    vec3 ambient = uAmbientLight * vColor.rgb; // ka * ia

    // Calculate the diffuse light effect
    vec3 L = normalize( uPointLightPosition - vPosition);
    float LdotN = max(dot(N, L), 0.0);
    vec3 diffuse = uDiffuseLightColor * LdotN; // kd * L•N

    // Combine the ambient and directional light
    vec4 phongReflection = vec4(ambient + diffuse, 1.0);
    gl_FragColor = phongReflection * texture2D(uSampler, vTextureCoord);
}