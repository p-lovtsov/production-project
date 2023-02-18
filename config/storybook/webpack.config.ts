import path from 'path';
import type webpack from 'webpack';
import { type RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module != null) {
    if (config.module.rules != null) {
      config.module.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
        if (rule !== '...' && (rule.test as string).includes('svg')) {
          return { ...rule, exclude: /\.svg$/i };
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

  return config;
};
