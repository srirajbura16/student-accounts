import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import '../App.css';

function Tags({ student }) {
  const [tag, setTag] = useState();
  const [tags, setTags] = useState([]);

  function addTag(e) {
    e.preventDefault();
    const data = tags;
    data.push(tag);
    setTags(data);

    setTag('');
    e.target.reset();
  }

  function updateTag(e) {
    const typedTag = e.target.value;
    setTag(typedTag);
  }

  return (
    <div className="Tags">
      <div>
        {tags.map((studentTag) => {
          return <div key={nanoid()}>{studentTag}</div>;
        })}
      </div>

      <form onSubmit={addTag}>
        <input type="text" className="tag-input" onChange={updateTag} />
      </form>
    </div>
  );
}

export default Tags;
