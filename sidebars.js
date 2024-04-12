/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
//const sidebars = {
// By default, Docusaurus generates a sidebar from the docs folder structure
// mainSidebar: [{type: 'autogenerated', dirName: '.'}],

// But you can create a sidebar manually


module.exports = {
  docs: [
    {
      type: 'doc',
      label: 'Welcome',
      id: 'intro'
    },
    {
      type: 'category',
      label: 'Introduction',
      // collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'overview/whatwedo'
        },
        {
          type: 'doc',
          id: 'overview/whyedge'
        },
      ]
    },
    {
      type: 'category',
      label: 'How it all works',
      items: [
        {
          type: 'doc',
          id: 'howitworks/keyconcepts'
        },
        {
          type: 'doc',
          id: 'howitworks/alefnetwork'
        },
      ]
    },
    {
      type: 'category',
      label: 'Quickstart Guide',
      items: [
        {
          type: 'doc',
          id: 'quickstart/checklist',
          //          label: 'Setup Summary'
        },
        {
          type: 'doc',
          id: 'quickstart/setupguide',
          //         label: 'Prepare for setup'
        },
        {
          type: 'doc',
          id: 'quickstart/approvisioningguide',
          //         label: 'Prepare for setup'
        },
      ]
    },
    /*
    {
      type: 'doc',
      label: 'API Specification Links',
      id: 'apiguide',
    },

   {
     type: 'category',
     label: 'Network Access Control',
     items: [
       {
         type: 'doc',
         id: 'nac/nacoverview',
         label: 'NAC Overview'
       },
       {
         type: 'doc',
         id: 'nac/nacconfig',
         label: 'NAC Setup Guide'
       },
       {
         type: 'doc',
         id: 'nac/arcmonitor',
         label: 'ARC monitoring'
       },
     ]
   },
   {
     type: 'category',
     label: 'Rule Lists',
     items: [
       {
         type: 'doc',
         id: 'rulelists/rulelistsoverview',
         label: 'Rule Lists Overview'
       },
       {
         type: 'doc',
         id: 'rulelists/rulelistsconfig',
         label: 'Rule Lists Configuration Guide'
       },
     ]
   },
   */
    {
      type: 'category',
      label: 'API reference',
      link: {
        type: 'generated-index'
      },
      items: [
        {
          type: 'link',
          label: 'Provisioning API',
          href: 'https://app.swaggerhub.com/apis-docs/MMCKENN72_1/alef-mobile_network_api/1.0.0-oas3-mm1',
        },
        {
          type: 'link',
          label: 'Reporting API',
          href: 'https://app.swaggerhub.com/apis-docs/MMCKENN72_1/reporting/1.0.0-oas3',
        },
      ]
    },
    {
      type: 'category',
      label: 'Reporting Guide',
      link: {
        type: 'generated-index'
      },
      items: [
        {
          type: 'doc',
          //         label: 'Working with reports',
          id: 'reporting/reporting'
        },
        {
          type: 'doc',
          id: 'reporting/uereports'
        },
        {
          type: 'doc',
          id: 'reporting/epreports'
        },
      ]
    },
    {
      type: 'doc',
      label: 'Advanced',
      id: 'advanced',
    },
    {
      type: 'doc',
      label: 'Glossary',
      id: 'glossary',
    },
    {
      type: 'doc',
      label: 'Support',
      id: 'support',
    },

  ],
};



