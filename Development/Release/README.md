# Release Versioning

## Semantic Versioning

Packages and tools will following the standard [Semantic Versioning](https://semver.org/) often found with OpenSource Projects.

Semantic Versioning uses a three-part number, MAJOR.MINOR.PATCH. Each of the parts is incremented according to:

- MAJOR, when a change is incompatible with previous releases
- MINOR, when new functionality is added in a backwards-compatible manner
- PATCH, when bug fixes are made in a backward-compatible manner

## Bodiless Versioning

The packages that compose of Bodiless when all packages are in development stage (0.x.y) will all maintain the same package versioning and all update together following semantic versioning.  We will revisit this process/versioning when we get to stable 1.0 release.

### 0.x Bodiless Release Process

#### Incremental End of Sprint
At end of Sprint, the package versioning will be released and available to the Starter Kit.
The process to do that is the following:
See [Bodiless Package Release Process](../Deployment/jenkins?id=publish-bodiless-packages)

The choice of incremental version of major/minor/patch is dependent on what has gone in during current sprint.  At this point with no end-users, there is little risk to incompatible changes, so we will keep increasing the minor version (x) while we are 0.x release stage.  We will start using some form of semantic release to automatically determine patch, minor, major in future.
