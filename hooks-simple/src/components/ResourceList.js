import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResources = async (parameter) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${parameter}`);
    setResources(response.data);
  };

  // acts like componentDidMount() and componentDidUpdate()
  useEffect(() => {
    fetchResources(resource);
  }, [resource]);

  return (
    <div>
      <h3>{ resource }</h3>
      <ul>
        { resources.map(record => <li key={ record.id }>{ record.title }</li>) }
      </ul>
    </div>
  );
}

export default ResourceList;
