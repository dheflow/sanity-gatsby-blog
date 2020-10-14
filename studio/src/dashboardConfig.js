export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f86ba6c9a18ac90dcc5c2bb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-raywoqhp',
                  apiId: 'd3153a7c-43b1-4142-b7ea-71c469553709'
                },
                {
                  buildHookId: '5f86ba6c1381547da2feaedf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4zxydhay',
                  apiId: 'fb7e0ec9-84ab-43ac-887e-2d0304a30bb7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dheflow/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4zxydhay.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
