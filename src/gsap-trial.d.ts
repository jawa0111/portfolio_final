// gsap-trial ships without TypeScript declarations, which makes `tsc -b`
// (run during `npm run build`) fail with TS7016. Declare the submodules we use
// so the production build compiles.
declare module "gsap-trial";
declare module "gsap-trial/SplitText";
declare module "gsap-trial/ScrollSmoother";
