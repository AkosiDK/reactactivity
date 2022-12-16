import React, { useState, useEffect } from 'react';

function Post() {

    const [data, setData] = useState(null);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response.json();
            setData(json);
        }

        fetchData();
    }, []);
    
    return (
        <div>
            {data && data.map(item => (
                <div className='border mb-3 mt-3 p-5'>
                    <h1 className='display-1' key={item.id}>{item.title.charAt(0).toUpperCase()+item.title.slice(1)}</h1>
                    <p key={item.id}>{item.body}</p>
                </div>
            ))}
        </div>
    );
}
export default Post;