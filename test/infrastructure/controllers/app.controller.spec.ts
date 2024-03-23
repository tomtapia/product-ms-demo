import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../../src/infrastructure/controllers/app.controller';
import { AppService } from '../../../src/application/usercases/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    // Should return a string "Hello World!" when getHello method is called.
    it('should return "Hello World!" when getHello method is called', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
    // Should return a string.
    it('should return a string', () => {
      const result = appController.getHello();
      expect(typeof result).toBe('string');
    });
    // Should return a string with length less than 100.
    it('should return a string with length less than 100', () => {
      const result = appController.getHello();
      expect(result.length).toBeLessThan(100);
    });
  });
});
