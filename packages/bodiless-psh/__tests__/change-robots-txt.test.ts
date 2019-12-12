/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable global-require */

export {};
let fs = require('fs');
let pathUtil = require('path');

describe('robots.txt', () => {
  beforeEach(() => {
    jest.resetModules();
    fs = require('fs');
    jest.mock('fs');
    pathUtil = require('path');
    process.env.ROBOTSTXT_SRC_FILE = 'src/robots.txt';
    process.env.ROBOTSTXT_TMP_FILE = 'tmp/robots.txt';
    process.env.ROBOTSTXT_TARGET_FILE = 'public/robots.txt';
    process.env.ROBOTSTXT_SRC_URL = 'www.example.com';
    process.env.ROBOTSTXT_TARGET_URL = 'test.example.com';
  });
  describe('during build phase', () => {
    describe('when robots.txt exists', () => {
      beforeEach(() => {
        fs.existsSync.mockImplementation((path$: string) => {
          if (path$ === process.env.ROBOTSTXT_SRC_FILE) {
            return true;
          }
          return false;
        });
      });
      it('should copy src file to tmp file', () => {
        const changeRobotsTxt = require('../src/change-robots-txt');
        changeRobotsTxt.main('build');
        expect(fs.rename.mock.calls[0][0]).toBe(process.env.ROBOTSTXT_SRC_FILE);
        expect(fs.rename.mock.calls[0][1]).toBe(process.env.ROBOTSTXT_TMP_FILE);
      });
      it('should create symlink to the target file', () => {
        const changeRobotsTxt = require('../src/change-robots-txt');
        fs.rename.mockImplementation(
          (oldPath: any, newPath: any, callback: Function) => {
            callback(undefined);
          },
        );
        changeRobotsTxt.main('build');
        expect(fs.symlink.mock.calls[0][0]).toBe(
          process.env.ROBOTSTXT_TARGET_FILE,
        );
        expect(fs.symlink.mock.calls[0][1]).toBe(
          process.env.ROBOTSTXT_SRC_FILE,
        );
      });
    });
    describe('when robots.txt does not exist', () => {
      beforeEach(() => {
        fs.existsSync.mockImplementation((path$: string) => {
          if (path$ === process.env.ROBOTSTXT_SRC_FILE) {
            return false;
          }
          return false;
        });
      });
      it('should not be moved and symlinked', () => {
        expect(fs.rename).toHaveBeenCalledTimes(0);
        expect(fs.symlink).toHaveBeenCalledTimes(0);
      });
    });
  });
  describe('during deploy phase', () => {
    const readRobotsTxt = () => {
      fs.readFile.mockImplementation(
        (path$: string, encoding: string, callback: Function) => {
          if (path$ === process.env.ROBOTSTXT_TMP_FILE) {
            const robotsTxtSrcPath = pathUtil.join(
              __dirname,
              'fixtures/robotstxt/source.txt',
            );
            const robotsTxt = jest
              .requireActual('fs')
              .readFileSync(robotsTxtSrcPath)
              .toString();
            callback(undefined, robotsTxt);
          }
        },
      );
    };

    describe('when robots.txt exists', () => {
      beforeEach(() => {
        fs.existsSync.mockImplementation((path$: string) => {
          if (path$ === process.env.ROBOTSTXT_TMP_FILE) {
            return true;
          }
          return false;
        });
      });
      describe('when the environment is not production', () => {
        it('should read from tmp file and perform url replacement', () => {
          readRobotsTxt();
          const changeRobotsTxt = require('../src/change-robots-txt');
          changeRobotsTxt.main('deploy');
          const robotsTxtTargetPath = pathUtil.join(
            __dirname,
            'fixtures/robotstxt/expected.txt',
          );
          const robotsTxtExpected = jest
            .requireActual('fs')
            .readFileSync(robotsTxtTargetPath)
            .toString();
          expect(fs.writeFile.mock.calls[0][0]).toBe(
            process.env.ROBOTSTXT_TARGET_FILE,
          );
          expect(fs.writeFile.mock.calls[0][1]).toBe(robotsTxtExpected);
        });
      });
      describe('when the environment is production', () => {
        beforeEach(() => {
          process.env.ROBOTSTXT_PROD_ENV = '1';
        });
        it('should not change source robots.txt', () => {
          readRobotsTxt();
          const changeRobotsTxt = require('../src/change-robots-txt');
          changeRobotsTxt.main('deploy');
          const robotsTxtSrcPath = pathUtil.join(
            __dirname,
            'fixtures/robotstxt/source.txt',
          );
          const robotsTxtExpected = jest
            .requireActual('fs')
            .readFileSync(robotsTxtSrcPath)
            .toString();
          expect(fs.writeFile.mock.calls[0][0]).toBe(
            process.env.ROBOTSTXT_TARGET_FILE,
          );
          expect(fs.writeFile.mock.calls[0][1]).toBe(robotsTxtExpected);
        });
      });
    });
    describe('when robots.txt does not exist', () => {
      beforeEach(() => {
        fs.existsSync.mockImplementation((path$: string) => {
          if (path$ === process.env.ROBOTSTXT_TMP_FILE) {
            return false;
          }
          return false;
        });
      });
      it('should not be written', () => {
        expect(fs.writeFile).toHaveBeenCalledTimes(0);
      });
    });
  });
});
