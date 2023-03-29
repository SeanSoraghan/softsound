export const frag = `
//uniform float time;
//uniform float centroid;
//uniform float rms;
//uniform vec2  resolution;

varying vec3 norm;
varying vec3 vert;
//const float pi = 3.14159265359;

void main()
{
	vec3 col = vec3 (0.0);
	vec3 eye = vec3 (0.0, 0.0, -100.0);
	vec3 ray = normalize (eye - vert);
	float diffuse = dot (ray, norm) * 0.5;

	float highlight = pow (1.0 - diffuse, 2.0);
	float dist = distance (vec3 (0.0), vert);

	float innerShadowing = dist / 50.0;

	col += diffuse * innerShadowing + highlight;// * rms;
	col *= vec3 (0.3, 0.5, 0.4);

	gl_FragColor = vec4 (col, 1.0);
}
`

export const vert = `
uniform float time;

varying vec3 norm;
varying vec3 vert;

uniform float mouseX;
uniform float mouseY;
uniform float rms;
uniform float envTime;

const float pi = 3.14159265359;

void main()
{
	float r = sqrt (pow (position.x, 2.0) + pow (position.y, 2.0) + pow (position.z, 2.0));
	float inclination = acos (position.z / r);
	float azimuth 	  = atan (position.y / position.x);

	vec2 normedMouse = normalize(vec2(mouseX, mouseY));
	//cos, 0, sin
	//0, 1, 0
	//-sin, 0, cos
	float rotAngle = pi * 0.5;
	mat3 pointRight = mat3 (cos (rotAngle), 0.0, sin(rotAngle),
						  0.0, 1.0, 0.0,
						  -sin (rotAngle), 0.0, cos (rotAngle));

	vec2 currentLookAt = vec2(1.0, 0.0);
	float mouseInUpperHalf = float(normedMouse.y < 0.0);
	float rad = acos(dot(normedMouse, currentLookAt));
	float lookAtAngle = (1.0 - mouseInUpperHalf) * rad + (mouseInUpperHalf * (2.0 * pi - rad));

	//cos -sin 0
	//sin cos 0
	//0 0 1
	mat3 lookAt = mat3 (cos(lookAtAngle), -sin(lookAtAngle), 0.0,
						sin(lookAtAngle), cos(lookAtAngle), 0.0,
						0.0, 0.0, 1.0);

	vec3 rotatedPos = lookAt * pointRight * position;
	vec3 rotatedNorm = lookAt * pointRight * normal;

	float azimuthAmp = 0.1;//10.5;
	float inclinationAmp = 0.1;//10.5;
	float inclinationAmpEnv = 0.001;//(sin (time * 0.15) * 3.0) * 0.1;//rms;
	float azimuthAmpEnv = 0.001;//(sin (time * 0.1) * 0.5 + 0.5) * 0.1;//rms;
	vec3 extruded = rotatedPos + rotatedNorm * sin (azimuth * 20.0) * 0.05
							   + rotatedNorm * sin (inclination * 18.0) * 0.1 * mouseY;

	norm = rotatedNorm;
	vert = extruded;

	gl_Position = projectionMatrix * modelViewMatrix * vec4 (extruded, 1.0);
}
`