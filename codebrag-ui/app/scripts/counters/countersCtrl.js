angular.module('codebrag.counters')

    .controller('CountersCtrl', function (notificationPoller, notificationsRegistry, $scope, $state, $rootScope, events, currentCommit, countersService, currentRepoContext) {

        $scope.notifications = notificationsRegistry.notifications;

        notificationPoller.start();

        $scope.counters = {
            commits: function() {
                return countersService.commitsCounter.currentCount();
            },
            followups: function() {
                return countersService.followupsCounter.currentCount();
            }
        };

        $scope.updates = {
            commits: function() {
                return countersService.commitsCounter.updateAvailable();
            },
            followups: function() {
                return countersService.followupsCounter.updateAvailable();
            }
        };

        $scope.openFollowups = function() {
            countersService.reloadCounters({followups: true});
            $rootScope.$broadcast(events.followupsTabOpened);
            $state.transitionTo('followups.list');
        };

        $scope.openCommits = function() {
            countersService.reloadCounters({commits: true});
            currentCommit.empty();
            $rootScope.$broadcast(events.commitsTabOpened);
            $state.transitionTo('commits.list', {repo: currentRepoContext.repo});
        };
    });