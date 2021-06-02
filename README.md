## Getting Started with storybook

To run storybook:

```bash
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

You can start adding the stories by modifying `components/yourcomponent/component.stories.tsx`. The page auto-updates as you edit the file.


## Deploying

1. To deploy on vercel ensure the framework option is `Other`.
2. In the build command option set it to `yarn build-storybook`
3. The output directory option should contain `/storybook-static`
4. Deploy! 🎉
