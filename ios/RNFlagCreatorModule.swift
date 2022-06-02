//
//  RNFlagCreatorModule.swift
//  RNFlagCreatorModule
//
//  Copyright © 2022 Youness Makhfi. All rights reserved.
//

import Foundation

@objc(RNFlagCreatorModule)
class RNFlagCreatorModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
