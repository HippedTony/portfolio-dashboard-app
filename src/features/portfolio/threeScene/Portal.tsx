import {
  Center,
  Sparkles,
  useGLTF,
  useTexture,
  shaderMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import portalVertexShader from "@/features/portfolio/shaders/portal/vertex.glsl";
import portalFragmentShader from "@/features/portfolio/shaders/portal/fragment.glsl";
import { extend, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

type GLTLResult = {
  nodes: {
    baked: THREE.Mesh;
    poleLightA: THREE.Mesh;
    poleLightB: THREE.Mesh;
    portalLight: THREE.Mesh;
  };
};

type PortalMaterialType = THREE.ShaderMaterial & {
  uTime: number;
};

type PortalProps = {
  isMobile: boolean;
};

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#ffffff"),
    uColorEnd: new THREE.Color("#000000"),
  },
  portalVertexShader,
  portalFragmentShader,
);
extend({ PortalMaterial });

function Portal({ isMobile }: PortalProps) {
  const portalMaterial = useRef<PortalMaterialType | null>(null);

  const { nodes } = useGLTF("./model/portal.glb") as unknown as GLTLResult;

  const bakedTexture = useTexture("./model/baked.jpg");
  bakedTexture.flipY = false;

  useFrame((_state, delta) => {
    if (portalMaterial.current) portalMaterial.current.uTime += delta;
  });

  return (
    <Center
      scale={isMobile ? 0.6 : 1}
      position={isMobile ? [0, -0.5, 0] : [0, 0, 0]}
    >
      <mesh geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>

      <mesh
        geometry={nodes.poleLightA.geometry}
        position={nodes.poleLightA.position}
      >
        <meshBasicMaterial color={"#ffffe5"} />
      </mesh>

      <mesh
        geometry={nodes.poleLightB.geometry}
        position={nodes.poleLightB.position}
      >
        <meshBasicMaterial color={"#ffffe5"} />
      </mesh>

      <mesh
        geometry={nodes.portalLight.geometry}
        position={nodes.portalLight.position}
        rotation={nodes.portalLight.rotation}
      >
        <portalMaterial ref={portalMaterial} />
      </mesh>

      <Sparkles
        size={6}
        scale={[4, 1, 4]}
        position-y={0.7}
        speed={0.2}
        count={40}
      />
    </Center>
  );
}

export default React.memo(Portal);

useGLTF.preload("./model/portal.glb");
useTexture.preload("./model/baked.jpg");
