import {Suspense , useState , useEffect} from 'react'
import { Canvas , } from '@react-three/fiber'
import { OrbitControls,Preload , useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
  
  <mesh >
 
    <hemisphereLight  intensity={0.15} 
    groundColor={"black"}/>
    <pointLight intensity={1}/>
    <spotLight 
    position={[40,60,10]}
    angle={0.12}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize = {1024}
    />
    <primitive
    object={computer.scene}
    scale ={isMobile?0.45:0.55}
    position ={isMobile ?[0,-2.2 ,-0.6]:[0,-3 ,-0.8] }
    rotation ={[-0.01,-0.2,-0.1]}
     />
 </mesh>

  )
}


const ComputerCanvas =()=>{
  const [isMobile , setMobile] =useState(false)
  useEffect(()=>{
    const mediaQuery = window.matchMedia("(max-width:900px)")
    setMobile(mediaQuery.matches);
    const handleMedia=(e)=>{
        setMobile(e.matches)
    }
    mediaQuery.addEventListener("change" , handleMedia);
    return ()=>{
      mediaQuery.removeEventListener("change" , handleMedia)
    }
  },[])
  return (
    
  <Canvas
  frameloop="demand"
  shadows 
  camera={{position:[20,3,5] , fov:25}}
  gl={{preserveDrawingBuffer:true}}
  >
    <Suspense fallback={<CanvasLoader/>}>
     <OrbitControls
      enableZoom ={false}
      maxPolarAngle={Math.PI /2}
      minPolarAngle={Math.PI/2}
     />
     <Computers isMobile = {isMobile}/>
     </Suspense>
     <Preload all />
  </Canvas>
  
  )
}
export default ComputerCanvas