# Webpack TypeScript Library Boilerplate

## To test if it's working
1. Build and link

```bash
yarn install
yarn build
yarn link
```

2. Make another TypeScript project

```bash
mkdir my-test && cd "$_"
yarn link @test/lib
yarn add --dev typescript ts-node
```

3. Create a TypeScript file to test this module

```typescript
// src/index.ts
import { MyClass, AnotherEntry } from '@test/lib'

const objA = MyClass.myObject
const objB = AnotherEntry.getObjectFromAnotherEntry()

objA.sayHello()
objB.sayHello()

if (objA === objB) {
  console.log('No module duplication! It\'s all good!')
} else {
  console.log('Module duplication detected.')
}
```

4. Run the script above to test

```
yarn ts-node src/index.ts
```

## Notes
1. `main` field in `package.json` is important. It points to the entry point of the package, so that it enables direct imports like `import { sth } from 'my-package-name'`.
2. Generated `*.d.ts` files has its own directory hierarchy instead of the one Webpack emits, following configuration in `tsconfig.json`. If you have more than one source directory at the root, it will generate two-depth directory hierarchy, instead of one-depth.
