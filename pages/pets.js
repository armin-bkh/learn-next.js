import Image from "next/image";
import pet from '../public/images/5.jpg';

const pets = ['1', '2', '3', '4', '5'];

const PetsPage = () => {
    return ( 
        <main>
            <Image src={pet} alt="pet 5" width={500} height={500} placeholder="blur" property="" />
            {pets.map(pet => (
                <Image key={pet} src={`/images/${pet}.jpg`} alt="pets gallery" height={500} width={500}/>
            ))}
        </main>
     );
}
 
export default PetsPage;