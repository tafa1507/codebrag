import org.mockito.BDDMockito._
    val authorTime = new DateTime(revCommit.getAuthorIdent.getWhen)
      commitTime, authorTime, List(), List(CommitFileInfo("file.txt", "added", expectedPatch)))
    val authorTime = new DateTime(revCommit.getAuthorIdent.getWhen)
      commitTime, authorTime, List(), List(CommitFileInfo("file.txt", "added", expectedPatch)))
    val lastCommit = givenCommit("file.txt", "file content update", "commit2 msg")
    given(commitInfoDaoMock.findLastSha()).willReturn(Some(lastCommit.getId.name))
    verify(commitInfoDaoMock).findLastSha()
      uriBuilder,
      commitInfoDaoMock),