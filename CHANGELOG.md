# Changelog
## [0.0.1] - 2025-09-07
### Added
- Initial release of the Assembly IntelliSense extension.
- Completion provider for x86, AT&T, ARM64, and 6502 assembly instructions.
- Supports keyword suggestions on any character.
- Configured with ESLint using Flat Config and strict rules.
- Optimized esbuild script for secure builds.

### Security
- Removed unused ESLint `env` keys per Flat Config migration.
- Ensured `esbuild.js` has clean error handling and logging.
