import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, useGLTF, Float } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

const Background = () => {
    const model1 = useGLTF('/low-rhino1.glb');
    const model2 = useGLTF('/low-rhino2.glb');
    const model3 = useGLTF('/low-rhino3.glb');
    const model4 = useGLTF('/low-rhino4.glb');
    //マテリアルを定義する
    const material = new MeshStandardMaterial({
        color: '#111',
        roughness: 0.5,
        metalness: 5,
    });
    // モデルのマテリアルを設定する
    model1.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = material;
        }
    });
    model2.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = material;
        }
    });
    model3.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = material;
        }
    });
    model4.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = material;
        }
    });
    return (
        <div className="canvas-wrap">
            {/* <Canvas camera={{ fov: 45 }} dpr={[1, 2]} shadows style={{ position: 'absolute' }}> */}
            <Canvas camera={{ fov: 45, near: 0.1, fav: 2000 }}>
                <color attach="background" args={['#0E0E0E']} />

                {/* ライト */}
                {/* <directionalLight color="#333" position={[0, 0, 5]} /> */}
                {/* <spotLight color="#fff" intensity={5} position={[5, 5, 10]} angle={Math.PI / 4} /> */}
                {/* <ambientLight intensity={1} /> */}
                {/* <pointLight color="#222" intensity={25} position={[2, 3, 50]} /> */}
                <pointLight color="#222" intensity={25} position={[2, 3, 50]} />

                <Float rotationIntensity={1.5}>
                    {/* <rectAreaLight color={'purple'} intensity={50} rotation={[0.1, Math.PI, 0]} width={2.0} height={1.5} position={[0, 0, -1]} /> */}
                    <primitive material={material} object={model1.scene} position={[0.8, -2.2, -0.2]} scale={0.2} rotation-x={[1.7]} rotation-y={[-0.6]} />
                    {/* <mesh geometry={model1.scene.children[0].geometry} material={material} position={[0.7, -1.55, -0.2]} scale={0.15} rotation-x={[1.7]} rotation-y={[-0.6]} /> */}
                </Float>
                <Float rotationIntensity={0.2}>
                    {/* <rectAreaLight color={'red'} intensity={50} rotation={[0.1, Math.PI, 0]} width={2.0} height={1.5} position={[0, 0, -1]} /> */}
                    <primitive material={material} object={model2.scene} position={[0.5, 3, -5]} scale={0.2} rotation-x={[1]} rotation-y={[4.2]} />
                </Float>
                <Float rotationIntensity={0.2}>
                    {/* <rectAreaLight color={'red'} intensity={50} rotation={[0.1, Math.PI, 0]} width={2.0} height={1.5} position={[0, 0, -1]} /> */}
                    <primitive object={model3.scene} position={[-6, -0.5, -9]} scale={0.2} rotation-x={[1]} rotation-y={[-4]} />
                </Float>
                <Float rotationIntensity={0.2}>
                    {/* <rectAreaLight color={'red'} intensity={50} rotation={[0.1, Math.PI, 0]} width={2.0} height={1.5} position={[0, 0, -1]} /> */}
                    <primitive object={model4.scene} position={[14, 2.8, -20]} scale={0.2} rotation-x={[1.5]} rotation-y={[0.6]} />
                </Float>
                {/* <Text font="/DMSans-Bold.ttf" fontSize={0.5} position={[0, 0.2, 0.3]}>
                    Hello, I'm Tsudumiya
                </Text> */}
            </Canvas>
        </div>
    );
};

export default Background;
