# Repro for

```
Missing onError handler for invocation 'rebuildSchemaWithSitePage', error was 'Error: Cannot get field '_xwpGatsbyNodeModified' from type 'SitePageContext'. Field does not exist.'. Stacktrace was 'Error: Cannot get field '_xwpGatsbyNodeModified' from type 'SitePageContext'. Field does not exist.
```

## Steps

- clone, install dependencies
- `ENABLE_GATSBY_REFRESH_ENDPOINT=1 gatsby develop` - start gatsby with refresh endpoint enabled, wait to compile
- `curl -X POST http://localhost:8000/__refresh` - trigger webhook that will remove field from page.context and result in error
