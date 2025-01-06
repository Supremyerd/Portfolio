
import { useState } from 'react';
import Card from './card';
import CardDetailsModal from './card/description';
import './index.scss';


function Projects() {
    const [showModal, setShowModal] = useState(false);

    const handleSetShowModal = () => setShowModal(!showModal);

    return <>
        <CardDetailsModal show={showModal} hiddenModal={handleSetShowModal}/>

        <div className="title">
            Projetos
        </div>

        <div className='content deck'>
        
            <Card height='150%' width='50%' text='Uma bela linguagem dificil' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrd-mQQPmg1J7CrvGxgpqJuKdnVLDJs4U0Q&s' title='C++' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>

            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='teste' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            <Card text='Some quick example text to build on the card title and make up the bulk of the cards content.' img='' title='abc' onClick={handleSetShowModal}/>
            
            
            
        </div>

      
    </>

}

export default Projects;