import React from 'react';
import Accordion from "react-bootstrap/Accordion"

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts?posts.map(post => (
        <Accordion className="postaccordioncontainer">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        <div  className="headeraccordion">
              <small>{post.name}</small>
              <div>
                 <h4>Gender</h4>
                 <small>{post.gender}</small>
              </div>
              <div>
                 <h4>Birth Year</h4>
                 <small>{post.birth_year}</small>
              </div>
            </div>      
        </Accordion.Header>
        <Accordion.Body>
                 <div className="accordionbodycontainer">
                      <h4>Description</h4>
                      <small>{post.name}'s personal information is mentioned below.</small>
                      <table className='tableContainer'>
                        <div>
                        <tr>
                          <div className='tablesingalcolumn'>
                            <th>Hair color</th>
                            <td>{post.hair_color}</td>
                          </div>
                        </tr>
                        <tr>
                          <div className='tablesingalcolumn'>
                            <th>mass</th>
                            <td>{post.mass} &nbsp;kg</td>
                          </div>
                        </tr>
                        </div>
                        <div>
                        <tr>
                          <div className='tablesingalcolumn'>
                            <th>Eye color</th>
                            <td>{post.eye_color}</td>
                          </div>
                        </tr>
                        <tr>
                          <div className='tablesingalcolumn'>
                            <th>Skin color</th>
                            <td>{post.skin_color}</td>
                          </div>
                        </tr>
                        </div>
                      </table>
                        <div className="m-1">
                        <tr>
                          <div className='tablesingalcolumn'>
                            <th>Films</th>
                            {post.films.map(film=><td><a href={film} target="_blank">{film}</a></td>)}
                          </div>
                        </tr>
                        </div>
                 </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      )):""}
    </ul>
  );
};

export default Posts;