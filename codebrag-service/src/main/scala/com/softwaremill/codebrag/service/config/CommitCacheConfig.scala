package com.softwaremill.codebrag.service.config

import com.softwaremill.codebrag.common.config.ConfigWithDefault

trait CommitCacheConfig extends ConfigWithDefault {

  lazy val maxCommitsCachedPerBranch = getInt("codebrag.max-commits-per-branch", 3000)
  lazy val requiredReviewersCount = getInt("codebrag.required-reviewers-count", 1)
}
