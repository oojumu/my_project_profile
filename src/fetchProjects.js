import { useState,useEffect } from 'react';
import { createClient }  from 'contentful';


const client = createClient({
    space: '5p9hrewyh9hf',
    environment: 'master',
    accessToken: '7hrpYZPm9Zwge52BRVzJyl4hhFsCTgfiEsgIG4c1-c0' //import.meta.env.VITE_API_KEY,
});


export const useFetchProjects = () => {

    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])

    const getData = async() =>{
        try {
            
            const response = await client.getEntries({content_type: 'portfolio' });
            const projectoz = response.items.map((item) =>
            {
                const {title, url, image} = item.fields
                const id = item.sys.id 
                const img = image?.fields?.file?.url;
                return { title, url, id, img };
            });

            setProjects(projectoz);
            setLoading(false);
        } 
        catch (error) 
        {
                console.log(error);
                setLoading(false);
        }
    };

    useEffect(() => {
        getData()
    }, []);

    return {loading, projects }
}