import path from 'path';
import { DefinePlugin, type Configuration, type RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve?.modules?.unshift(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module != null) {
    if (config.module.rules != null) {
      config.module.rules = config.module.rules?.map((rule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test((rule as RuleSetRule).test as string)) {
          return { ...(rule as RuleSetRule), exclude: /\.svg$/i };
        }

        return rule;
      });
    }
  }

  config.module?.rules?.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(buildCssLoader(true));
  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }))
  return config;
};
