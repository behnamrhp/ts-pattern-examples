/**
 * Abstract factory interface serves as a blueprint 
 *  for making families of variant of objects or products,
 *  without mentioning their concrete classes.
 * At the end of the day, clients will work
 *  With this interface and family object interface.
 * Here we have two family objects for 
 *  IRecord and ISaveVideo, which with two methods
 *  of `recordInstance` and `saveInstance` we can have
 *  multiple factories belongs to same variants of 
 *  multiples families by implementing this interface.
 *  
 */
interface ICamFactory {
  recordInstance(): IRecord
  saveInstance(): ISaveVideo
}

/**
 * Each family of objects should have their own 
 *  interface, so abstract factory interface and 
 *  client knows how to work with these families
 */
interface IRecord {
  start(): boolean
  stop(): boolean
  pause(): boolean
}

/**
 * Each family of objects should have their own 
 *  interface, so abstract factory interface and 
 *  client knows how to work with these families
 */
interface ISaveVideo {
  checkEnoughSpace(): boolean
  saveVideo(path: string): boolean
}

/* -------------------------------------------------------------------------- */
/*                                   Windows                                  */
/* -------------------------------------------------------------------------- */
/**
 * This concrete factory produces families of windows variants
 */
class WindowsFactory implements ICamFactory {
  recordInstance(): IRecord {
    return new WindowsRecordLib()
  }
  saveInstance(): ISaveVideo {
    return new WindowsSaveVideo()
  }
}

/**
 * This is a concrete Object that will be created by related concrete factory.
 * In this example this class is a family member of
 * `IRecord` object family
 */
class WindowsRecordLib implements IRecord {
  start(): boolean {
    // Implement logics to handle start logic in windows
    console.log('Start video recording in Windows')
    return true
  }
  stop(): boolean {
    // Implements logics to handle stop logics in windows
    console.log('Stop video recording in Windows')
    return true
  }
  pause(): boolean {
    // Implements logics to handle pause logics in windows
    console.log('Pause video recording in Windows')
    return true
  }
}

/**
 * This is a concrete Object that will be created by related concrete factory.
 * In this example this class is a family member of
 * `ISaveVideo` object family
 */
class WindowsSaveVideo implements ISaveVideo {
  checkEnoughSpace(): boolean {
    // Handle logics related to check enough space in windows
    console.log('Checking enough space in windows')
    return true 
  }
  saveVideo(_path: string): boolean {
    // Handle logics related to save video in windows
    console.log('Saving video in Windows')
    return true
  }
}

/* -------------------------------------------------------------------------- */
/*                                   Mobile                                   */
/* -------------------------------------------------------------------------- */
/**
 * This concrete factory produces families of Mobile variants
 */
class MobileFactory implements ICamFactory {
  recordInstance(): IRecord {
    return new MobileRecordLib()
  }
  saveInstance(): ISaveVideo {
    return new MobileSaveVideo()
  }
}

/**
 * This is a concrete Object that will be created by related concrete factory.
 * In this example this class is a family member of
 * `IRecord` object family
 */
class MobileRecordLib implements IRecord {
  start(): boolean {
    // Implement logics to handle start logic in windows
    console.log('Start video recording in Mobile')
    return true
  }
  stop(): boolean {
    // Implements logics to handle stop logics in windows
    console.log('Stop video recording in Mobile')
    return true
  }
  pause(): boolean {
    // Implements logics to handle pause logics in windows
    console.log('Pause video recording in Mobile')
    return true
  }
}

/**
 * This is a concrete Object that will be created by related concrete factory.
 * In this example this class is a family member of
 * `ISaveVideo` object family
 */
class MobileSaveVideo implements ISaveVideo {
  checkEnoughSpace(): boolean {
    // Handle logics related to check enough space in windows
    console.log('Checking enough space in windows')
    return true 
  }
  saveVideo(_path: string): boolean {
    // Handle logics related to save video in windows
    console.log('Saving video in Mobile')
    return true
  }
}

/* -------------------------------------------------------------------------- */
/*                                   Client                                   */
/* -------------------------------------------------------------------------- */
class ApplicationCam {
  private record: IRecord
  private saveInPlatform: ISaveVideo
  private basePathToSaveVideo = 'base/path/to/save'

  constructor(
    camFactory: ICamFactory
  ) {
    this.record = camFactory.recordInstance()
    this.saveInPlatform = camFactory.saveInstance()
  }

  startRecord() {
    this.record.start()
  }

  stopRecordAndSave() {
    const isStopped = this.record.stop()
    if (!isStopped) return;
    this.saveInPlatform.saveVideo(this.basePathToSaveVideo)
  }
}

class ApplicationConfig {
  get camPlatform(): ICamFactory {
    // Check os and choose one variance concrete class in here
    return new WindowsFactory()
  }
}

const appConfig = new ApplicationConfig()

const onClickStartRecord = () => {
  const applicationCam = new ApplicationCam(appConfig.camPlatform)
  applicationCam.startRecord()
}

const onClickStopRecord = () => {
  const applicationCam = new ApplicationCam(appConfig.camPlatform)
  applicationCam.stopRecordAndSave()
}

onClickStartRecord()
onClickStopRecord()