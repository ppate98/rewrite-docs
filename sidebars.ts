import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Running Recipes',
      link: {
        type: 'generated-index',
        title: 'Running Recipes',
        description: 'Learn how to run OpenRewrite recipes.',
        slug: '/running-recipes',
        keywords: ['guides'],
      },
      items: [
        'running-recipes/getting-started',
        'running-recipes/running-rewrite-on-a-gradle-project-without-modifying-the-build',
        'running-recipes/running-rewrite-on-a-maven-project-without-modifying-the-build',
        'running-recipes/multi-module-maven',
        'running-recipes/running-text-based-recipes',
        'running-recipes/data-tables',
        {
          type: 'category',
          label: 'Popular recipe guides',
          link: {
            type: 'generated-index',
            title: 'Popular recipe guides',
            description: 'Popular recipes you may want to run.',
            slug: '/popular-recipe-guides',
            keywords: ['guides'],
          },
          items: [
            'running-recipes/popular-recipe-guides/common-static-analysis-issue-remediation', 
            'running-recipes/popular-recipe-guides/automatically-fix-checkstyle-violations',
            'running-recipes/popular-recipe-guides/migrate-to-java-17',
            'running-recipes/popular-recipe-guides/migrate-from-junit-4-to-junit-5',
            'running-recipes/popular-recipe-guides/migrate-to-spring-3',
            'running-recipes/popular-recipe-guides/spring-boot-2.x-migration-from-spring-boot-1.x',
            'running-recipes/popular-recipe-guides/quarkus-2.x-migration-from-quarkus-1.x',
            'running-recipes/popular-recipe-guides/migrate-to-micronaut-4-from-micronaut-3',
            'running-recipes/popular-recipe-guides/migrate-to-micronaut-3-from-micronaut-2',
            'running-recipes/popular-recipe-guides/migrate-to-slf4j-from-log4j',
            'running-recipes/popular-recipe-guides/slf4j-parameterized-logging',
            'running-recipes/popular-recipe-guides/authoring-declarative-yaml-recipes',
            'running-recipes/popular-recipe-guides/automating-maven-dependency-management',
            'running-recipes/popular-recipe-guides/hamcrest-to-assertj',
            'running-recipes/popular-recipe-guides/junit-asserts-to-assertj',
            'running-recipes/popular-recipe-guides/migrate-to-jakarta-ee-10',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Authoring Recipes',
      link: {
        type: 'generated-index',
        title: 'Authoring Recipes',
        description: 'Learn how to create your own OpenRewrite recipes.',
        slug: '/authoring-recipes',
        keywords: ['guides'],
      },
      items: [
        'authoring-recipes/recipe-development-environment',
        'authoring-recipes/types-of-recipes',
        'authoring-recipes/writing-a-java-refactoring-recipe',
        'authoring-recipes/refaster-recipes',
        'authoring-recipes/recipe-testing',
        'authoring-recipes/recipe-conventions-and-best-practices',
        'authoring-recipes/modifying-methods-with-javatemplate',
        'authoring-recipes/multiple-visitors',
        'authoring-recipes/writing-recipes-over-multiple-source-file-types',
        'authoring-recipes/multiple-versions',
      ],
    },
    {
      type: 'category',
      label: 'Recipe catalog',
      link: {
        type: 'generated-index',
        title: 'Recipe catalog',
        description: 'A list of all OpenRewrite recipes.',
        slug: '/recipes',
        keywords: ['references'],
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'recipes'
        }
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
        title: 'Reference',
        description: 'Reference docs.',
        slug: '/reference',
        keywords: ['reference'],
      },
      items: [
        'reference/faq',
        'reference/latest-versions-of-every-openrewrite-module',
        'reference/recipes-with-data-tables',
        'reference/rewrite-maven-plugin',
        'reference/gradle-plugin-configuration',
        'reference/supported-languages',
        'reference/snapshot-instructions',
        'reference/jsonpath-and-jsonpathmatcher-reference',
        'reference/yaml-format-reference',
        'reference/method-patterns',
        'reference/dependency-version-selectors',
        'reference/framework-provided-markers',
        'reference/building-openrewrite-from-source',
        'reference/community-recipes',
      ],
    },
    {
      type: 'category',
      label: 'Concepts & explanations',
      link: {
        type: 'generated-index',
        title: 'Concepts & explanations',
        description: 'Docs that explain key concepts in OpenRewrite.',
        slug: '/concepts-explanations',
        keywords: ['concepts'],
      },
      items: [
        'concepts-and-explanations/lossless-semantic-trees',
        'concepts-and-explanations/lst-examples',
        'concepts-and-explanations/yaml-lst-examples',
        'concepts-and-explanations/tree-visiting-printer',
        'concepts-and-explanations/build-plugin-lst',
        'concepts-and-explanations/recipes',
        'concepts-and-explanations/visitors',
        'concepts-and-explanations/styles',
        'concepts-and-explanations/environment',
        'concepts-and-explanations/markers',
        'concepts-and-explanations/javatemplate',
        'concepts-and-explanations/quarks',
      ],
    },
    {
      type: 'category',
      label: 'Changelog',
      link: {
        type: 'generated-index',
        title: 'Changelog',
        description: 'OpenRewrite changelogs.',
        slug: '/changelog',
        keywords: ['changelog'],
      },
      items: [
        'changelog/8-41-1-Release',
        'changelog/8-41-0-Release',
        'changelog/8-40-2-Release',
        'changelog/8-38-0-Release',
        'changelog/8-37-1-Release',
        'changelog/8-36-0-Release',
        'changelog/8-35-0-Release',
        'changelog/8-34-0-Release',
        'changelog/8-33-4-Release',
        'changelog/8-32-0-Release',
        'changelog/8-30-0-Release',
        'changelog/8-29-0-Release',
        'changelog/8-28-1-Release',
        'changelog/8-27-1-Release',
        'changelog/8-25-0-Release',
        'changelog/8-24-0-Release',
        'changelog/8-23-2-Release',
        'changelog/8-21-0-Release',
        'changelog/8-20-0-Release',
        {
          type: 'category',
          label: 'Earlier releases',
          link: {
            type: 'generated-index',
            title: 'Earlier releases',
            description: 'Old OpenRewrite releases',
            slug: '/changelog/earlier-releases',
            keywords: ['changelog'],
          },
          items: [
           'changelog/earlier-releases/8-17-1-Release',
           'changelog/earlier-releases/8-15-2-Release',
           'changelog/earlier-releases/8-14-0-Release',
           'changelog/earlier-releases/8-13-4-Release',
           'changelog/earlier-releases/8-13-1-Release',
           'changelog/earlier-releases/8-12-0-Release',
           'changelog/earlier-releases/8-11-5-Release',
           'changelog/earlier-releases/8-11-2-Release',
           'changelog/earlier-releases/8-11-1-Release',
           'changelog/earlier-releases/8-11-0-Release',
           'changelog/earlier-releases/8-9-6-Release',
           'changelog/earlier-releases/8-9-0-Release',
           'changelog/earlier-releases/8-8-4-Release',
           'changelog/earlier-releases/8-8-3-Release',
           'changelog/earlier-releases/8-8-1-Release',
           'changelog/earlier-releases/8-8-0-Release',
           'changelog/earlier-releases/8-7-3-Release',
           'changelog/earlier-releases/8-7-0-Release',
           'changelog/earlier-releases/8-5-2-Release',
           'changelog/earlier-releases/8-5-0-Release',
           'changelog/earlier-releases/8-4-2-Release',
           'changelog/earlier-releases/8-4-1-Release',
           'changelog/earlier-releases/8-4-0-Release',
           'changelog/earlier-releases/8-3-0-Release',
           'changelog/earlier-releases/8-2-0-Release',
           'changelog/earlier-releases/8-1-14-Release',
           'changelog/earlier-releases/8-1-13-Release',
           'changelog/earlier-releases/8-1-12-Release',
           'changelog/earlier-releases/8-1-11-Release',
           'changelog/earlier-releases/8-1-10-Release',
           'changelog/earlier-releases/8-1-8-Release',
           'changelog/earlier-releases/8-1-6-Release',
           'changelog/earlier-releases/8-1-3-Release',
           'changelog/earlier-releases/8-1-2-Release',
           {
            type: 'category',
            label: 'Rewrite 7 releases',
            link: {
              type: 'generated-index',
              title: 'Rewrite 7 releases',
              description: 'Rewrite 7 changelogs',
              slug: '/changelog/earlier-releases/rewrite-7',
              keywords: ['changelog'],
            },
            items: [
              'changelog/earlier-releases/rewrite-7/7-40-6-Release',
              'changelog/earlier-releases/rewrite-7/7-40-0-Release',
              'changelog/earlier-releases/rewrite-7/7-39-1-Release',
              'changelog/earlier-releases/rewrite-7/7-38-0-Release',
              'changelog/earlier-releases/rewrite-7/7-37-2-Release',
              'changelog/earlier-releases/rewrite-7/7-36-0-Release',
              'changelog/earlier-releases/rewrite-7/7-35-0-Release',
              'changelog/earlier-releases/rewrite-7/7-34-2-Release',
              'changelog/earlier-releases/rewrite-7/7-34-0-Release',
              'changelog/earlier-releases/rewrite-7/7-33-0-Release',
            ]
          },
          ]
        },
      ],
    },
  ],
};

export default sidebars;
