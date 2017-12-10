import React from 'react'
import{ Button , Grid } from 'semantic-ui-react'

 export const Footer1 = () => (
  <Grid.Row>
      <Grid.Column>
        <Button as='a'> View All</Button>
        <Button as='a'> View Delete</Button>
        <Button as='a'>Purge</Button>

      </Grid.Column>
    </Grid.Row>
  )
