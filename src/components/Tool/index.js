import React from 'react';
import RemoveTool from '../RemoveTool';
import { Card, Tags } from './styles';

function Tool() {
  return (
    <>
      <Card>
        <RemoveTool />
        <h5>Nome Tool</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora unde
          nulla labore repellat facilis. Incidunt corrupti a magni rerum nobis
          voluptatem, praesentium perspiciatis quod! Quasi autem quos quo nisi
          dolore.
        </p>
        <Tags>
          <strong>#tags</strong>
          <strong>#outra</strong>
        </Tags>
      </Card>
    </>
  );
}
export default Tool;
