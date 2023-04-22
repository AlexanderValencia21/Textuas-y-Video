import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model() {
const cartoonGirl = useLoader(GLTFLoader, "/static/spider-man_carnage.glb");
return <
  primitive object={cartoonGirl.scene} scale={525} position={[0, -2,0]}
  />;
}