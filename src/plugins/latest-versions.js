const latestVersions = {
  "{{VERSION_REWRITE_RECIPE_BOM}}": "3.5.0",
  "{{VERSION_REWRITE_GRADLE_PLUGIN}}": "7.3.0",
  "{{VERSION_REWRITE_MAVEN_PLUGIN}}": "6.4.0",
  "{{VERSION_IO_MODERNE_RECIPE_REWRITE_HIBERNATE}}": "0.2.1",
  "{{VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING}}": "0.3.2",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_COBOL}}": "2.13.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_CORE}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_CSHARP}}": "0.23.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_GRADLE}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_GROOVY}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_HCL}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_JAVA}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_JAVASCRIPT}}": "0.34.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_JSON}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_KOTLIN}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_POLYGLOT}}": "2.1.4",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_PROPERTIES}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_PROTOBUF}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_PYTHON}}": "1.34.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_TEMPLATING}}": "1.24.2",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_TOML}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_XML}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_REWRITE_YAML}}": "8.49.0",
  "{{VERSION_ORG_OPENREWRITE_META_REWRITE_ANALYSIS}}": "2.19.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_AI_SEARCH}}": "0.25.1",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_ALL}}": "1.13.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_ANDROID}}": "0.7.4",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE}}": "2.4.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CIRCLECI}}": "3.3.1",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS}}": "0.10.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS_NG}}": "0.7.4",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_COMPILED_ANALYSIS}}": "0.2.6",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_COMPREHENSION}}": "0.5.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CONCOURSE}}": "3.2.1",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CUCUMBER_JVM}}": "2.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DOCKER}}": "2.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DOTNET}}": "0.8.1",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_FEATURE_FLAGS}}": "1.4.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS}}": "3.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITLAB}}": "0.9.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE}}": "2.4.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON}}": "0.15.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}": "1.30.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY}}": "3.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS}}": "0.22.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES}}": "3.2.2",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LIBERTY}}": "1.14.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS}}": "3.4.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICROMETER}}": "0.17.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}": "2.19.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}": "3.4.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_NODEJS}}": "0.19.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_OKHTTP}}": "0.11.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_OPENAPI}}": "0.16.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}": "2.16.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REACTIVE_STREAMS}}": "0.11.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE}}": "0.2.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}": "6.3.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SQL}}": "2.1.3",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS}}": "2.4.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STRUTS}}": "0.12.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TERRAFORM}}": "3.1.3",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}": "3.4.0",
  "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}": "0.17.0",
};
export default latestVersions;
