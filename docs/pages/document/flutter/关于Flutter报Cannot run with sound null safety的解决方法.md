---
title: 关于Flutter报Cannot run with sound null safety的解决方法
date: '2022-11-29 22:43:34'
sidebar: 'auto'
categories:
 - Flutter
tags:
 - Flutter-BUG
---


关于Flutter报Cannot run with sound null safety的解决方法。
<!-- more -->

### flutter sdk 版本升级到2.0或者更高的版本后，运行之前的代码会报错，比如：
  - ```txt
    Error: Cannot run with sound null safety, because the following dependencies
    don't support null safety:

    - package:flutter_swiper
    - package:flutter_page_indicator
    - package:transformer_page_view

    For solutions, see https://dart.dev/go/unsound-null-safety


    FAILURE: Build failed with an exception.
    ```
    
  - ```txt
    Launching lib/main.dart on iPhone 13 mini in debug mode...
    lib/main.dart:1
    Xcode build done.                                           20.5s
    Failed to build iOS app
    Error output from Xcode build:
      2022-11-29 22:48:25.409 xcodebuild[74141:17918950] Requested but did not find extension point with identifier Xcode.IDEKit.ExtensionSentinelHostApplications for extension Xcode.DebuggerFoundation.AppExtensionHosts.watchOS of plug-in com.apple.dt.IDEWatchSupportCore
      2022-11-29 22:48:25.410 xcodebuild[74141:17918950] Requested but did not find extension point with identifier Xcode.IDEKit.ExtensionPointIdentifierToBundleIdentifier for extension Xcode.DebuggerFoundation.AppExtensionToBundleIdentifierMap.watchOS of plug-in com.apple.dt.IDEWatchSupportCore
        ** BUILD FAILED **
      Xcode's output:
        Writing result bundle at path:
    	    /var/folders/h5/dd9h9tgx735bfwwqt239pc0w0000gn/T/flutter_tools.sKJxa1/flutter_ios_build_temp_dirBidLby/temporary_xcresult_bundle
      Error: Cannot run with sound null safety, because the following dependencies
    don't support null safety:
     - package:get
    For solutions, see https://dart.dev/go/unsound-null-safety
    Failed to package /Users/mzc/Documents/project_self/planet_of_knowledge.
    Command PhaseScriptExecution failed with a nonzero exit code
    note: Using new build system
    note: Planning
    note: Build preparation complete
    note: Building targets in dependency order
    Result bundle written to path:
    	/var/folders/h5/dd9h9tgx735bfwwqt239pc0w0000gn/T/flutter_tools.sKJxa1/flutter_ios_build_temp_dirBidLby/temporary_xcresult_bundle
    Could not build the application for the simulator.
    Error launching application on iPhone 13 mini.
    Exited (sigterm)
    ```

### 解决方案
:::tip
上面的问题是，这些包不支持 safety模式。
:::
  - 我们可以在运行的时候添加--no-sound-null-safety。
    - 打开Android Studio，然后依次选择【Run】 -->【 Edit Configurations】 --> 【Add Additional Run args 】--> 【--no-sound-null-safety】

  - 除了上面找个方法外，对于一些老的项目，我们还可以通过降低sdk版本的方式来解决报错，比如
    - 因为sdk 2.12 以上版本有了空安全要求。
    - sdk: ">=2.12.0 < 3.0.0" 改为   sdk: ">=2.8.0 < 3.0.0"
