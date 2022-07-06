import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import {
    dataCmoBlock
} from '../components/layout.module.css'

const Datocms = ( { data } ) => {

    console.log(data);
    return (
        <Layout pageTitle="DatoCMS">
            <p>I'm making this by following the Gatsby Tutorial. And below content if fetch from DatoCMS using GraphQL.</p>

            <div className={dataCmoBlock}>
                {
                    data.datoCmsCourse.courseDetail.map(section => (
                        <div key={section.id}>
                            <div style={{textAlign:'center'}}>
                                <h3>{section.smallText}</h3>
                            </div>
                            <div style={{textAlign:'center'}}>
                                <h1>{section.bigText}</h1>
                            </div>
                            <div style={{textAlign:'justify'}}>
                                <span>{section.description}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
};

export const DatocmsQuery = graphql`
query DatoCMS1 {
        datoCmsCourse {
        id
        name
        slug
        courseDetail {
          bigText
          buttonText
          description
          id
          smallText
        }
      }
    }
`

export default Datocms

