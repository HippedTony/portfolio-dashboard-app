import { Object3DNode } from '@react-three/fiber';
import { ShaderMaterial } from 'three';

declare module '@react-three/fiber' {
  interface ThreeElements {
    portalMaterial: Object3DNode<ShaderMaterial, typeof ShaderMaterial>;
  }
}