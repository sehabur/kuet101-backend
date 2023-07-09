const data = {
  data: {
    entityUrn:
      'urn:li:collectionResponse:EW1naFnIAiKdRoxGKj7fAwUKZRN49Sv3nBF6XLgAw54=',
    paging: { count: 10, start: 0, links: [] },
    '*elements': ['urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o'],
    $type: 'com.linkedin.restli.common.CollectionResponse',
  },
  meta: {
    microSchema: {
      version: '2',
      types: {
        'com.linkedin.deco.recipe.anonymous.Anon1033194044': {
          fields: {
            controlName: { type: 'string' },
            featuredItemCardUrn: { type: 'string' },
            featuredItemCard: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1479096976',
              resolvedFrom: 'featuredItemCardUrn',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.UnfeatureAction',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.ProfileLocation': {
          fields: {
            preferredGeoPlace: { type: 'string' },
            countryCode: { type: 'string' },
            postalCode: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.ProfileLocation',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1080314395': {
          fields: {
            ringContentType: { type: 'string' },
            actionTarget: { type: 'string' },
            preDashEntityUrn: { type: 'string' },
            entityUrn: { type: 'string' },
            emphasized: { type: 'boolean' },
          },
          baseType: 'com.linkedin.voyager.dash.common.image.RingStatus',
        },
        'com.linkedin.deco.recipe.anonymous.Anon157189383': {
          fields: {
            previewVideo: {
              type: 'com.linkedin.voyager.dash.deco.common.video.VideoPlayMetadata',
            },
          },
          baseType: 'com.linkedin.voyager.dash.stories.ProfileVideoPreview',
        },
        'com.linkedin.deco.recipe.anonymous.Anon715554404': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Endorsement',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1479096976': {
          fields: { entityUrn: { type: 'string' } },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.ProfileFeaturedItemCard',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1976702492': {
          fields: {
            iweWarned: { type: 'boolean' },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.deco.recipe.anonymous.Anon489758292': {
          fields: {
            viewer: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon430310092',
              resolvedFrom: 'viewerUrn',
            },
            contentSeriesUrn: { type: 'string' },
            contentSeries: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1789236903',
              resolvedFrom: 'contentSeriesUrn',
            },
            viewerUrn: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.MemberToContentSeriesSubscribeMetadata',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1341377363': {
          fields: {
            subscribeActionUrn: { type: 'string' },
            isSubscribed: { type: 'boolean' },
            subscribeAction: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1462572720',
              resolvedFrom: 'subscribeActionUrn',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.SubscribeNewsletterAction',
        },
        'com.linkedin.deco.recipe.anonymous.Anon2075539534': {
          fields: {
            updatedCards: { type: { array: 'string' } },
            updatedCardsResolutionResults: {
              type: {
                map: 'com.linkedin.deco.recipe.anonymous.Anon1052602939',
              },
              resolvedFrom: 'updatedCards',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.ProfileViewModelResponse',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1479950671': {
          fields: {
            elements: {
              type: {
                array: 'com.linkedin.deco.recipe.anonymous.Anon2036460800',
              },
            },
          },
          baseType: 'com.linkedin.restli.common.CollectionResponse',
        },
        'com.linkedin.deco.recipe.anonymous.Anon957098413': {
          fields: {
            controlName: { type: 'string' },
            memberRelationshipUrn: { type: 'string' },
            memberRelationship: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon947840432',
              resolvedFrom: 'memberRelationshipUrn',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.ConnectAction',
        },
        'com.linkedin.deco.recipe.anonymous.Anon377984030': {
          fields: {
            professionalEvent: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1213723597',
              resolvedFrom: 'professionalEventUrn',
            },
            vectorImage: {
              type: 'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
            },
            professionalEventUrn: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.common.image.NonEntityProfessionalEventLogo',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1694510658': {
          fields: { entityUrn: { type: 'string' } },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.treasury.TreasuryMedia',
        },
        'com.linkedin.voyager.dash.deco.common.image.Company': {
          fields: {
            logo: {
              type: {
                union: {
                  url: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                },
              },
            },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.organization.Company',
        },
        'com.linkedin.voyager.dash.deco.feed.publishing.SubscribeAction': {
          fields: {
            subscribed: { type: 'boolean' },
            preDashEntityUrn: { type: 'string' },
            entityUrn: { type: 'string' },
            subscriberCount: { type: 'int' },
          },
          baseType: 'com.linkedin.voyager.dash.publishing.SubscribeAction',
        },
        'com.linkedin.deco.recipe.anonymous.Anon405167834': {
          fields: {
            name: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            nameSupplementaryInfo: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            imageUnion: {
              type: {
                union: {
                  url: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                },
              },
            },
            headline: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            subHeadline: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.common.media.StickerLinkMediumTemplateView',
        },
        'com.linkedin.deco.recipe.anonymous.Anon409680083': {
          fields: { type: { type: 'string' }, index: { type: 'int' } },
          baseType: 'com.linkedin.voyager.dash.common.text.ListItemStyle',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1792705474': {
          fields: {
            invitationUnion: {
              type: {
                union: {
                  noInvitation:
                    'com.linkedin.deco.recipe.anonymous.Anon881636240',
                  invitation:
                    'com.linkedin.deco.recipe.anonymous.Anon2066892616',
                },
              },
            },
          },
          baseType: 'com.linkedin.voyager.dash.relationships.NoConnection',
        },
        'com.linkedin.deco.recipe.anonymous.Anon585860503': {
          fields: {
            action: {
              type: {
                union: {
                  ignoreRecommendationRequestActionUrn:
                    'com.linkedin.deco.recipe.anonymous.Anon671932728',
                  deleteTreasuryAction:
                    'com.linkedin.deco.recipe.anonymous.Anon1694510658',
                  deleteSkill:
                    'com.linkedin.deco.recipe.anonymous.Anon457780153',
                  followingState:
                    'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.FollowingState',
                  unfeatureAction:
                    'com.linkedin.deco.recipe.anonymous.Anon1479096976',
                  groupMembership:
                    'com.linkedin.deco.recipe.anonymous.Anon1683244170',
                  featureOrUnfeatureAction:
                    'com.linkedin.deco.recipe.anonymous.Anon1479096976',
                  addRecommendationToProfileActionUrn:
                    'com.linkedin.deco.recipe.anonymous.Anon1710561493',
                  endorsedSkill:
                    'com.linkedin.voyager.dash.deco.identity.profile.EndorsedSkill',
                },
              },
              resolvedFrom: 'actionUnion',
            },
            viewModelResponse: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon2075539534',
            },
            padded: { type: 'boolean' },
            trackingId: { type: 'bytes' },
            actionUnion: {
              type: {
                union: {
                  connectAction:
                    'com.linkedin.deco.recipe.anonymous.Anon957098413',
                  ignoreRecommendationRequestActionUrn: 'string',
                  overflowAction:
                    'com.linkedin.deco.recipe.anonymous.Anon1503466663',
                  saveStateAction:
                    'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.SaveStateAction',
                  navigationAction:
                    'com.linkedin.voyager.dash.deco.identity.profile.tetris.NavigationAction',
                  addRecommendationToProfileActionUrn: 'string',
                  endorsedSkill: 'string',
                  followingStateAction:
                    'com.linkedin.deco.recipe.anonymous.Anon337051259',
                  openProfileGeneratedSuggestionsFlowAction:
                    'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.OpenProfileGeneratedSuggestionsFlowAction',
                  unfeatureActionV2:
                    'com.linkedin.deco.recipe.anonymous.Anon1033194044',
                  deleteSkill: 'string',
                  deleteTreasuryAction: 'string',
                  premiumUpsellModalAction:
                    'com.linkedin.deco.recipe.anonymous.Anon1069590073',
                  deleteEntity:
                    'com.linkedin.deco.recipe.anonymous.Anon669380621',
                  followingState: 'string',
                  collapseExpandAction:
                    'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.CollapseExpandAction',
                  unfeatureAction: 'string',
                  featureOrUnfeatureAction: 'string',
                  composeOptionAction:
                    'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.ComposeOptionAction',
                  dismissAction:
                    'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.DimissAction',
                  deleteTreasuryActionV2:
                    'com.linkedin.deco.recipe.anonymous.Anon1710923302',
                  featureOrUnfeatureActionV2:
                    'com.linkedin.deco.recipe.anonymous.Anon263289509',
                  seeMoreOrLessAction:
                    'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.SeeMoreOrLessAction',
                  ignoreRecommendationRequestAction:
                    'com.linkedin.deco.recipe.anonymous.Anon1874268369',
                  deleteSkillAction:
                    'com.linkedin.deco.recipe.anonymous.Anon2125165352',
                  statefulButtonAction:
                    'com.linkedin.deco.recipe.anonymous.Anon1256641682',
                  subscribeNewsletterAction:
                    'com.linkedin.deco.recipe.anonymous.Anon1341377363',
                  addRecommendationToProfileAction:
                    'com.linkedin.deco.recipe.anonymous.Anon692733641',
                  entityVerificationAction:
                    'com.linkedin.deco.recipe.anonymous.Anon134780763',
                  modalAction:
                    'com.linkedin.deco.recipe.anonymous.Anon496339333',
                  groupMembership: 'string',
                  subscribeBellAction:
                    'com.linkedin.deco.recipe.anonymous.Anon1238542066',
                  endorsedSkillAction:
                    'com.linkedin.deco.recipe.anonymous.Anon1549551057',
                },
              },
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.ActionComponent',
        },
        'com.linkedin.deco.recipe.anonymous.Anon412783727': {
          fields: {
            targetInviteeResolutionResult: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon352881287',
              resolvedFrom: 'targetInvitee',
            },
            inviter: { type: 'string' },
            targetInvitee: { type: 'string' },
            inviterResolutionResult: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1976702492',
              resolvedFrom: 'inviter',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.invitation.NoInvitation',
        },
        'com.linkedin.deco.recipe.anonymous.Anon918376989': {
          fields: {
            title: { type: 'string' },
            invitationRelationshipOptions: {
              type: {
                array: 'com.linkedin.deco.recipe.anonymous.Anon934606613',
              },
            },
            subtitle: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.invitation.InvitationRelationshipForm',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1226238669': {
          fields: {
            name: { type: 'string' },
            logo: {
              type: {
                union: {
                  url: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                },
              },
            },
            universalName: { type: 'string' },
            entityUrn: { type: 'string' },
            url: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.organization.Company',
        },
        'com.linkedin.voyager.dash.deco.common.Locale': {
          fields: {
            variant: { type: 'string' },
            country: { type: 'string' },
            language: { type: 'string' },
          },
          baseType: 'com.linkedin.common.Locale',
        },
        'com.linkedin.voyager.dash.deco.common.ux.StatefulButtonModel': {
          fields: {
            actionDataModel: {
              type: {
                union: {
                  follow: 'com.linkedin.voyager.dash.deco.feed.FollowingState',
                  connectionOrInvitation:
                    'com.linkedin.voyager.dash.deco.relationships.MemberRelationshipV2',
                  memberToEntityRelationship:
                    'com.linkedin.voyager.dash.deco.relationships.DirectionalEntityRelationship',
                },
              },
              resolvedFrom: 'actionDataModelUnion',
            },
            actionDataModelUnion: {
              type: {
                union: {
                  connectionOrInvitation: 'string',
                  relationshipActionData:
                    'com.linkedin.voyager.dash.deco.common.ux.RelationshipActionData',
                  memberToEntityRelationship: 'string',
                  follow: 'string',
                },
              },
            },
            emphasisStyle: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.common.ux.button.StatefulButtonModel',
        },
        'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrl': {
          fields: {
            rootUrl: { type: 'string' },
            artifacts: {
              type: {
                array: 'com.linkedin.voyager.dash.deco.common.VectorArtifact',
              },
            },
          },
          baseType: 'com.linkedin.common.VectorImage',
        },
        'com.linkedin.deco.recipe.anonymous.Anon934606613': {
          fields: {
            type: { type: 'string' },
            name: { type: 'string' },
            controlName: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.invitation.InvitationRelationshipOption',
        },
        'com.linkedin.voyager.dash.deco.common.TapTargetWithoutEntity': {
          fields: {
            stickerLinkViewUnion: {
              type: {
                union: {
                  mediumTemplate:
                    'com.linkedin.deco.recipe.anonymous.Anon405167834',
                  largeTemplate:
                    'com.linkedin.deco.recipe.anonymous.Anon173266477',
                  smallTemplate:
                    'com.linkedin.deco.recipe.anonymous.Anon655007389',
                },
              },
            },
            stickerLinkTemplateSize: { type: 'string' },
            firstCornerXOffsetPercentage: { type: 'float' },
            type: { type: 'string' },
            thirdCornerYOffsetPercentage: { type: 'float' },
            url: { type: 'string' },
            urn: { type: 'string' },
            thirdCornerXOffsetPercentage: { type: 'float' },
            secondCornerYOffsetPercentage: { type: 'float' },
            fourthCornerXOffsetPercentage: { type: 'float' },
            firstCornerYOffsetPercentage: { type: 'float' },
            untaggable: { type: 'boolean' },
            rank: { type: 'int' },
            text: { type: 'string' },
            fourthCornerYOffsetPercentage: { type: 'float' },
            secondCornerXOffsetPercentage: { type: 'float' },
          },
          baseType: 'com.linkedin.voyager.dash.common.TapTarget',
        },
        'com.linkedin.voyager.dash.deco.common.video.Resolution': {
          fields: { width: { type: 'int' }, height: { type: 'int' } },
          baseType: 'com.linkedin.videocontent.Resolution',
        },
        'com.linkedin.voyager.dash.deco.common.text.ProfileForFamiliarName': {
          fields: {
            lastName: { type: 'string' },
            firstName: { type: 'string' },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.deco.recipe.anonymous.Anon173266477': {
          fields: {
            nameSupplementaryInfo: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            footerText: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            imageUnion: {
              type: {
                union: {
                  url: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                },
              },
            },
            subHeadline: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            name: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            insightText: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            headline: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            backgroundImageUnion: {
              type: {
                union: {
                  url: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                },
              },
            },
          },
          baseType:
            'com.linkedin.voyager.dash.common.media.StickerLinkLargeTemplateView',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1683244170': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.groups.GroupMembership',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1312950162': {
          fields: {
            entityUrn: { type: 'string' },
            memberRelationshipUnion: {
              type: {
                union: {
                  self: 'com.linkedin.restli.common.EmptyRecord',
                  connection:
                    'com.linkedin.deco.recipe.anonymous.Anon2134644859',
                  noConnection:
                    'com.linkedin.deco.recipe.anonymous.Anon1792705474',
                },
              },
            },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.MemberRelationship',
        },
        'com.linkedin.deco.recipe.anonymous.Anon356786217': {
          fields: {
            controlName: { type: 'string' },
            openExternally: { type: 'boolean' },
            navigationUrl: { type: 'string' },
            buttonAppearance: {
              type: 'com.linkedin.voyager.dash.deco.common.ux.ButtonAppearance',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.actions.CustomAction',
        },
        'com.linkedin.voyager.dash.deco.common.video.Transcript': {
          fields: {
            captionFormat: { type: 'string' },
            locale: { type: 'com.linkedin.voyager.dash.deco.common.Locale' },
            lines: {
              type: {
                array:
                  'com.linkedin.voyager.dash.deco.common.video.TranscriptLine',
              },
            },
            isAutogenerated: { type: 'boolean' },
            captionFile: { type: 'string' },
          },
          baseType: 'com.linkedin.videocontent.Transcript',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1286825962': {
          fields: {
            sharedSecret: { type: 'string' },
            entityUrn: { type: 'string' },
            invitationId: { type: 'long' },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.invitation.Invitation',
        },
        'com.linkedin.deco.recipe.anonymous.Anon59726608': {
          fields: {
            title: { type: 'string' },
            entityUrn: { type: 'string' },
            selectedOptionType: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.notifications.edgesetting.EdgeSetting',
        },
        'com.linkedin.voyager.dash.deco.common.image.OrganizationalPage': {
          fields: {
            entityUrn: { type: 'string' },
            pageType: { type: 'string' },
            logoV2: {
              type: 'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
            },
          },
          baseType: 'com.linkedin.voyager.dash.organization.OrganizationalPage',
        },
        'com.linkedin.voyager.dash.deco.common.Link': {
          fields: {
            type: { type: 'string' },
            rel: { type: 'string' },
            href: { type: 'string' },
          },
          baseType: 'com.linkedin.restli.common.Link',
        },
        'com.linkedin.deco.recipe.anonymous.Anon429038699': {
          fields: {
            paging: {
              type: 'com.linkedin.voyager.dash.deco.common.FullPaging',
            },
            elements: {
              type: {
                array: 'com.linkedin.deco.recipe.anonymous.Anon157189383',
              },
            },
          },
          baseType: 'com.linkedin.restli.common.CollectionResponse',
        },
        'com.linkedin.voyager.dash.deco.common.image.School': {
          fields: {
            logo: {
              type: {
                union: {
                  url: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                },
              },
            },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.organization.School',
        },
        'com.linkedin.deco.recipe.anonymous.Anon545512017': {
          fields: {
            icon: {
              type: 'com.linkedin.voyager.dash.deco.common.image.ImageViewModel',
            },
            composeNavigationContext: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon199392175',
            },
            displayText: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            textStartIcon: {
              type: 'com.linkedin.voyager.dash.deco.common.image.ImageViewModel',
            },
            composeOptionType: { type: 'string' },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.messaging.compose.ComposeOption',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1710561493': {
          fields: { entityUrn: { type: 'string' } },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.recommendations.Recommendation',
        },
        'com.linkedin.deco.recipe.anonymous.Anon881636240': {
          fields: {
            inviter: { type: 'string' },
            inviterResolutionResult: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon587401631',
              resolvedFrom: 'inviter',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.invitation.NoInvitation',
        },
        'com.linkedin.voyager.dash.deco.relationships.Connection': {
          fields: {
            createdAt: { type: 'long' },
            connectedMemberResolutionResult: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon336652209',
              resolvedFrom: 'connectedMember',
            },
            connectedMember: { type: 'string' },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.relationships.Connection',
        },
        'com.linkedin.deco.recipe.anonymous.Anon198476569': {
          fields: {
            viewer: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon430310092',
              resolvedFrom: 'viewerUrn',
            },
            vieweeFollowingViewer: { type: 'boolean' },
            viewerUrn: { type: 'string' },
            viewee: {
              type: 'com.linkedin.voyager.dash.deco.relationships.profile',
              resolvedFrom: 'vieweeUrn',
            },
            vieweeUrn: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.MemberToMemberFollowMetadata',
        },
        'com.linkedin.voyager.dash.deco.common.image.Group': {
          fields: {
            logo: {
              type: {
                union: {
                  url: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                },
              },
            },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.groups.Group',
        },
        'com.linkedin.deco.recipe.anonymous.Anon75549327': {
          fields: {
            pageKey: { type: 'string' },
            anchorPage: { type: 'boolean' },
          },
          baseType: 'com.linkedin.voyager.dash.common.tracking.PageKey',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1213723597': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.events.ProfessionalEvent',
        },
        'com.linkedin.deco.recipe.anonymous.Anon487759616': {
          fields: {
            company: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1226238669',
              resolvedFrom: 'companyUrn',
            },
            schoolName: { type: 'string' },
            school: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1621960601',
              resolvedFrom: 'schoolUrn',
            },
            entityUrn: { type: 'string' },
            companyUrn: { type: 'string' },
            schoolUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Education',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1251747613': {
          fields: {
            urn: { type: 'string' },
            modelName: { type: 'string' },
            fieldName: { type: 'string' },
            value: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.common.StringFieldReference',
        },
        'com.linkedin.voyager.dash.deco.feed.FollowingState': {
          fields: {
            followeeCount: { type: 'long' },
            entityUrn: { type: 'string' },
            trackingUrn: { type: 'string' },
            preDashFollowingInfoUrn: { type: 'string' },
            following: { type: 'boolean' },
            followingType: { type: 'string' },
            followerCount: { type: 'long' },
          },
          baseType: 'com.linkedin.voyager.dash.feed.FollowingState',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1869367056': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.groups.Group',
        },
        'com.linkedin.voyager.dash.deco.relationships.DirectionalEntityRelationship':
          {
            fields: {
              invitationUrn: { type: 'string' },
              entityUrn: { type: 'string' },
              invitation: {
                type: 'com.linkedin.voyager.dash.deco.relationships.InvitationRaw',
                resolvedFrom: 'invitationUrn',
              },
              relationshipDataUnion: {
                type: {
                  union: {
                    follow: 'com.linkedin.deco.recipe.anonymous.Anon191738356',
                    subscribe:
                      'com.linkedin.deco.recipe.anonymous.Anon40833127',
                  },
                },
              },
            },
            baseType:
              'com.linkedin.voyager.dash.relationships.DirectionalEntityRelationship',
          },
        'com.linkedin.deco.recipe.anonymous.Anon306926154': {
          fields: {
            elements: {
              type: {
                array: 'com.linkedin.deco.recipe.anonymous.Anon356786217',
              },
            },
          },
          baseType: 'com.linkedin.restli.common.CollectionResponse',
        },
        'com.linkedin.deco.recipe.anonymous.Anon496339333': {
          fields: {
            pageKey: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon75549327',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.ModalAction',
        },
        'com.linkedin.deco.recipe.anonymous.Anon94387579': {
          fields: {
            icon: {
              type: 'com.linkedin.voyager.dash.deco.common.image.ImageViewModel',
            },
            action: {
              type: {
                union: {
                  dismissRecommendationActionUrn:
                    'com.linkedin.deco.recipe.anonymous.Anon1710561493',
                  deleteRecommendationGivenActionUrn:
                    'com.linkedin.deco.recipe.anonymous.Anon1710561493',
                },
              },
              resolvedFrom: 'actionUnion',
            },
            text: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            viewModelResponse: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon2075539534',
            },
            helperText: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            trackingId: { type: 'string' },
            actionUnion: {
              type: {
                union: {
                  actionTargetV2:
                    'com.linkedin.deco.recipe.anonymous.Anon1399568931',
                  actionType: 'string',
                  deleteRecommendationGivenAction:
                    'com.linkedin.deco.recipe.anonymous.Anon692733641',
                  actionTypeV2:
                    'com.linkedin.deco.recipe.anonymous.Anon789139911',
                  dismissRecommendationAction:
                    'com.linkedin.deco.recipe.anonymous.Anon692733641',
                  actionTarget: 'string',
                  dismissRecommendationActionUrn: 'string',
                  deleteRecommendationGivenActionUrn: 'string',
                },
              },
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.OverflowMenuItem',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1568806612': {
          fields: {
            school: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon929195650',
              resolvedFrom: 'schoolUrn',
            },
            vectorImage: {
              type: 'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
            },
            schoolUrn: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.common.image.NonEntitySchoolLogo',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1449981882': {
          fields: {
            paging: {
              type: 'com.linkedin.voyager.dash.deco.common.FullPaging',
            },
            elements: {
              type: {
                array: 'com.linkedin.deco.recipe.anonymous.Anon1566936928',
              },
            },
          },
          baseType: 'com.linkedin.restli.common.CollectionResponse',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.SaveStateAction':
          {
            fields: {
              saveState: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon1350007507',
                resolvedFrom: 'saveStateUrn',
              },
              saveControlName: { type: 'string' },
              unsaveControlName: { type: 'string' },
              saveStateUrn: { type: 'string' },
            },
            baseType:
              'com.linkedin.voyager.dash.identity.profile.tetris.SaveStateAction',
          },
        'com.linkedin.deco.recipe.anonymous.Anon660720507': {
          fields: { name: { type: 'string' }, entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.organization.Company',
        },
        'com.linkedin.deco.recipe.anonymous.Anon2036460800': {
          fields: {
            insightImage: {
              type: 'com.linkedin.voyager.dash.deco.common.image.ImageViewModel',
            },
            sharedConnectionDetailTarget: { type: 'string' },
            text: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            navigationUrl: { type: 'string' },
            entityUrn: { type: 'string' },
            sharedConnectionDetailTargetResolutionResult: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon587401631',
              resolvedFrom: 'sharedConnectionDetailTarget',
            },
          },
          baseType: 'com.linkedin.voyager.dash.relationships.Insight',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.TopCardSupplementarycom.linkedin.voyager.dash.common.AudioMetadata':
          {
            fields: {
              urn: { type: 'string' },
              duration: { type: 'long' },
              url: { type: 'string' },
            },
            baseType: 'com.linkedin.voyager.dash.common.AudioMetadata',
          },
        'com.linkedin.voyager.dash.deco.relationships.ProfileWithIweWarned': {
          fields: {
            memorialized: { type: 'boolean' },
            lastName: { type: 'string' },
            firstName: { type: 'string' },
            tempStatus: { type: 'string' },
            entityUrn: { type: 'string' },
            tempStatusEmoji: { type: 'string' },
            iweWarned: { type: 'boolean' },
            publicIdentifier: { type: 'string' },
            headline: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1256641682': {
          fields: {
            controlName: { type: 'string' },
            statefulButtonModel: {
              type: 'com.linkedin.voyager.dash.deco.common.ux.StatefulButtonModel',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.StatefulButtonModelAction',
        },
        'com.linkedin.voyager.dash.deco.common.image.ImageViewModel': {
          fields: {
            attributes: {
              type: {
                array:
                  'com.linkedin.voyager.dash.deco.common.image.ImageAttribute',
              },
            },
            actionTarget: { type: 'string' },
            totalCount: { type: 'int' },
            accessibilityTextAttributes: {
              type: {
                array:
                  'com.linkedin.voyager.dash.deco.common.text.TextAttributeV2',
              },
            },
            accessibilityText: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.common.image.ImageViewModel',
        },
        'com.linkedin.deco.recipe.anonymous.Anon648914460': {
          fields: {
            companyUrn: { type: 'string' },
            company: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1927941263',
              resolvedFrom: 'companyUrn',
            },
            vectorImage: {
              type: 'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.common.image.NonEntityCompanyLogo',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.ComposeNavigationContext':
          {
            fields: {
              paidInMail: { type: 'boolean' },
              recipient: {
                type: {
                  map: 'com.linkedin.deco.recipe.anonymous.Anon587401631',
                },
                resolvedFrom: 'recipientUrns',
              },
              messageRequestContextUrn: { type: 'string' },
              recipientUrns: { type: { array: 'string' } },
              targetUrl: { type: 'string' },
              existingConversation: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon807183080',
                resolvedFrom: 'existingConversationUrn',
              },
              existingConversationUrn: { type: 'string' },
            },
            baseType:
              'com.linkedin.voyager.dash.messaging.compose.ComposeNavigationContext',
          },
        'com.linkedin.deco.recipe.anonymous.Anon4539795': {
          fields: {
            entityUrn: { type: 'string' },
            memberRelationshipUnion: {
              type: {
                union: {
                  self: 'com.linkedin.restli.common.EmptyRecord',
                  connection:
                    'com.linkedin.deco.recipe.anonymous.Anon2134644859',
                  noConnection:
                    'com.linkedin.deco.recipe.anonymous.Anon2058972220',
                },
              },
            },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.MemberRelationship',
        },
        'com.linkedin.voyager.dash.deco.common.text.ProfileForMention': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.voyager.dash.deco.common.text.Hashtag': {
          fields: {
            entityUrn: { type: 'string' },
            trackingUrn: { type: 'string' },
            actionTarget: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.feed.Hashtag',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1465360068': {
          fields: {
            viewingBehavior: { type: 'string' },
            url: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.common.text.TextLink',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.FollowingState':
          {
            fields: {
              followerCount: { type: 'long' },
              entityUrn: { type: 'string' },
              preDashFollowingInfoUrn: { type: 'string' },
              following: { type: 'boolean' },
            },
            baseType: 'com.linkedin.voyager.dash.feed.FollowingState',
          },
        'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution':
          {
            fields: {
              attribution: { type: 'string' },
              rootUrl: { type: 'string' },
              artifacts: {
                type: {
                  array: 'com.linkedin.voyager.dash.deco.common.VectorArtifact',
                },
              },
            },
            baseType: 'com.linkedin.common.VectorImage',
          },
        'com.linkedin.voyager.dash.deco.common.FullPaging': {
          fields: {
            start: { type: 'int' },
            count: { type: 'int' },
            total: { type: 'int' },
            links: {
              type: { array: 'com.linkedin.voyager.dash.deco.common.Link' },
            },
          },
          baseType: 'com.linkedin.restli.common.CollectionMetadata',
        },
        'com.linkedin.deco.recipe.anonymous.Anon831664802': {
          fields: {
            entityUrn: { type: 'string' },
            invitationId: { type: 'long' },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.invitation.Invitation',
        },
        'com.linkedin.deco.recipe.anonymous.Anon938007357': {
          fields: { available: { type: 'boolean' } },
          baseType:
            'com.linkedin.voyager.dash.messaging.presence.PresenceStatus',
        },
        'com.linkedin.deco.recipe.anonymous.Anon2125165352': {
          fields: {
            controlName: { type: 'string' },
            profileSkillUrn: { type: 'string' },
            profileSkill: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon457780153',
              resolvedFrom: 'profileSkillUrn',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.DeleteSkillAction',
        },
        'com.linkedin.voyager.dash.deco.common.image.ProfessionalEvent': {
          fields: {
            logoImage: {
              type: {
                union: {
                  url: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                },
              },
            },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.events.ProfessionalEvent',
        },
        'com.linkedin.voyager.dash.deco.common.video.Thumbnail': {
          fields: {
            resolution: {
              type: 'com.linkedin.voyager.dash.deco.common.video.Resolution',
            },
            url: { type: 'string' },
          },
          baseType: 'com.linkedin.videocontent.Thumbnail',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1238542066': {
          fields: {
            controlName: { type: 'string' },
            actionDelegateUrn: { type: 'string' },
            edgeSetting: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon735489647',
              resolvedFrom: 'edgeSettingUrn',
            },
            viewee: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1606874247',
              resolvedFrom: 'vieweeUrn',
            },
            edgeSettingUrn: { type: 'string' },
            vieweeUrn: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.SubscribeBellAction',
        },
        'com.linkedin.deco.recipe.anonymous.Anon337051259': {
          fields: {
            followControlName: { type: 'string' },
            unfollowControlName: { type: 'string' },
            followingStateUrn: { type: 'string' },
            followingState: {
              type: 'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.FollowingState',
              resolvedFrom: 'followingStateUrn',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.FollowingStateAction',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1106795004': {
          fields: {
            calloutType: { type: 'string' },
            callout: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon265153662',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.promovisibility.TopCardCalloutComponent',
        },
        'com.linkedin.voyager.dash.deco.common.DateRange': {
          fields: {
            start: { type: 'com.linkedin.voyager.dash.deco.common.Date' },
            end: { type: 'com.linkedin.voyager.dash.deco.common.Date' },
          },
          baseType: 'com.linkedin.common.DateRange',
        },
        'com.linkedin.voyager.dash.deco.relationships.InvitationRaw': {
          fields: {
            genericInvitationType: { type: 'string' },
            invitationId: { type: 'long' },
            sharedSecret: { type: 'string' },
            entityUrn: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.invitation.Invitation',
        },
        'com.linkedin.voyager.dash.deco.common.Date': {
          fields: {
            month: { type: 'int' },
            year: { type: 'int' },
            day: { type: 'int' },
          },
          baseType: 'com.linkedin.common.Date',
        },
        'com.linkedin.voyager.dash.deco.common.video.ProgressiveDownloadMetadata':
          {
            fields: {
              streamingLocations: {
                type: {
                  array:
                    'com.linkedin.voyager.dash.deco.common.video.StreamingLocation',
                },
              },
              size: { type: 'long' },
              bitRate: { type: 'int' },
              width: { type: 'int' },
              mediaType: { type: 'string' },
              mimeType: { type: 'string' },
              height: { type: 'int' },
            },
            baseType: 'com.linkedin.videocontent.ProgressiveDownloadMetadata',
          },
        'com.linkedin.deco.recipe.anonymous.Anon1069590073': {
          fields: { controlName: { type: 'string' } },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.PremiumUpsellModalAction',
        },
        'com.linkedin.voyager.dash.deco.common.video.AdaptiveStream': {
          fields: {
            initialBitRate: { type: 'int' },
            protocol: { type: 'string' },
            mediaType: { type: 'string' },
            masterPlaylists: {
              type: {
                array:
                  'com.linkedin.voyager.dash.deco.common.video.StreamingLocation',
              },
            },
          },
          baseType: 'com.linkedin.videocontent.AdaptiveStream',
        },
        'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2': {
          fields: {
            textDirection: { type: 'string' },
            text: { type: 'string' },
            attributesV2: {
              type: {
                array:
                  'com.linkedin.voyager.dash.deco.common.text.TextAttributeV2',
              },
            },
            accessibilityTextAttributesV2: {
              type: {
                array:
                  'com.linkedin.voyager.dash.deco.common.text.TextAttributeV2',
              },
            },
            accessibilityText: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.common.text.TextViewModel',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1529112441': {
          fields: {
            originalImageUrl: { type: 'string' },
            originalHeight: { type: 'int' },
            url: { type: 'string' },
            originalWidth: { type: 'int' },
          },
          baseType: 'com.linkedin.voyager.dash.common.ImageUrl',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1789236903': {
          fields: { title: { type: 'string' }, entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.publishing.ContentSeries',
        },
        'com.linkedin.voyager.dash.deco.common.video.StreamingLocation': {
          fields: { url: { type: 'string' }, expiresAt: { type: 'long' } },
          baseType: 'com.linkedin.videocontent.StreamingLocation',
        },
        'com.linkedin.voyager.dash.deco.relationships.MemberRelationshipV2': {
          fields: {
            memberRelationshipData: {
              type: {
                union: {
                  noInvitation:
                    'com.linkedin.deco.recipe.anonymous.Anon1031101697',
                  invitation:
                    'com.linkedin.voyager.dash.deco.relationships.Invitation',
                  connection:
                    'com.linkedin.voyager.dash.deco.relationships.Connection',
                },
              },
            },
            entityUrn: { type: 'string' },
            memberRelationshipUnion: {
              type: {
                union: {
                  self: 'com.linkedin.restli.common.EmptyRecord',
                  connection:
                    'com.linkedin.voyager.dash.deco.relationships.Connection',
                  noConnection:
                    'com.linkedin.voyager.dash.deco.relationships.NoConnection',
                },
              },
            },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.MemberRelationship',
        },
        'com.linkedin.voyager.dash.deco.common.video.VideoPlayMetadata': {
          fields: {
            thumbnail: {
              type: 'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrl',
            },
            progressiveStreams: {
              type: {
                array:
                  'com.linkedin.voyager.dash.deco.common.video.ProgressiveDownloadMetadata',
              },
            },
            liveStreamCreatedAt: { type: 'long' },
            prevMedia: { type: 'string' },
            transcripts: {
              type: {
                array: 'com.linkedin.voyager.dash.deco.common.video.Transcript',
              },
            },
            aspectRatio: { type: 'float' },
            media: { type: 'string' },
            adaptiveStreams: {
              type: {
                array:
                  'com.linkedin.voyager.dash.deco.common.video.AdaptiveStream',
              },
            },
            liveStreamEndedAt: { type: 'long' },
            duration: { type: 'long' },
            provider: { type: 'string' },
            entityUrn: { type: 'string' },
            nextMedia: { type: 'string' },
            thumbnails: {
              type: {
                array: 'com.linkedin.voyager.dash.deco.common.video.Thumbnail',
              },
            },
            trackingId: { type: 'string' },
          },
          baseType: 'com.linkedin.videocontent.VideoPlayMetadata',
        },
        'com.linkedin.voyager.dash.deco.relationships.ProfileWithEmailRequired':
          {
            fields: {
              memorialized: { type: 'boolean' },
              lastName: { type: 'string' },
              firstName: { type: 'string' },
              tempStatus: { type: 'string' },
              entityUrn: { type: 'string' },
              tempStatusEmoji: { type: 'string' },
              publicIdentifier: { type: 'string' },
              headline: { type: 'string' },
              emailRequired: { type: 'boolean' },
            },
            baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
          },
        'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.ComposeOption':
          {
            fields: {
              icon: {
                type: 'com.linkedin.voyager.dash.deco.common.image.ImageViewModel',
              },
              composeNavigationContext: {
                type: 'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.ComposeNavigationContext',
              },
              displayText: {
                type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
              },
              textStartIcon: {
                type: 'com.linkedin.voyager.dash.deco.common.image.ImageViewModel',
              },
              composeOptionType: { type: 'string' },
              entityUrn: { type: 'string' },
            },
            baseType:
              'com.linkedin.voyager.dash.messaging.compose.ComposeOption',
          },
        'com.linkedin.deco.recipe.anonymous.Anon1606874247': {
          fields: {
            firstName: { type: 'string' },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1975396536': {
          fields: {
            saved: { type: 'boolean' },
            salesListNavigationUrl: { type: 'string' },
            entityUrn: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.actions.SalesNavigatorSaveState',
        },
        'com.linkedin.deco.recipe.anonymous.Anon2058972220': {
          fields: {
            invitationUnion: {
              type: {
                union: {
                  noInvitation:
                    'com.linkedin.deco.recipe.anonymous.Anon412783727',
                  invitation:
                    'com.linkedin.deco.recipe.anonymous.Anon831664802',
                },
              },
            },
          },
          baseType: 'com.linkedin.voyager.dash.relationships.NoConnection',
        },
        'com.linkedin.deco.recipe.anonymous.Anon265153662': {
          fields: {
            statement: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            secondaryAction: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon585860503',
            },
            icon: { type: 'string' },
            actionDelegateUrn: { type: 'string' },
            primaryAction: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon585860503',
            },
            legoTrackingId: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.InlineCalloutComponent',
        },
        'com.linkedin.deco.recipe.anonymous.Anon789139911': {
          fields: {
            controlName: { type: 'string' },
            actionType: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.OverflowMenuItemTypeAction',
        },
        'com.linkedin.deco.recipe.anonymous.Anon929195650': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.organization.School',
        },
        'com.linkedin.deco.recipe.anonymous.Anon457780153': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Skill',
        },
        'com.linkedin.voyager.dash.deco.relationships.Invitation': {
          fields: {
            inviteeMemberResolutionResult: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon336652209',
              resolvedFrom: 'inviteeMember',
            },
            invitationType: { type: 'string' },
            inviteeMember: { type: 'string' },
            entityUrn: { type: 'string' },
            invitationState: { type: 'string' },
            invitationId: { type: 'long' },
            sharedSecret: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.invitation.Invitation',
        },
        'com.linkedin.deco.recipe.anonymous.Anon352881287': {
          fields: {
            entityUrn: { type: 'string' },
            emailRequired: { type: 'boolean' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1936086081': {
          fields: {
            paging: {
              type: 'com.linkedin.voyager.dash.deco.common.FullPaging',
            },
            elements: {
              type: {
                array: 'com.linkedin.deco.recipe.anonymous.Anon1320789737',
              },
            },
          },
          baseType: 'com.linkedin.restli.common.CollectionResponse',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.TopCardSupplementary':
          {
            fields: {
              profileVideoPreview: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon429038699',
                isInjection: true,
              },
              profileTopCardCustomAction: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon306926154',
                isInjection: true,
              },
              imFollowsPromoLegoTrackingId: { type: 'string' },
              profileTopEducation: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon964860152',
                isInjection: true,
              },
              creatorWebsite: {
                type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
              },
              educationOnProfileTopCardShown: { type: 'boolean' },
              profileTopPosition: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon1449981882',
                isInjection: true,
              },
              associatedHashtagsCopy: {
                type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
              },
              multiLocaleFullNamePronunciationAudio: {
                type: {
                  map: 'com.linkedin.voyager.dash.deco.identity.profile.TopCardSupplementarycom.linkedin.voyager.dash.common.AudioMetadata',
                },
              },
              profileInsight: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon1479950671',
                isInjection: true,
              },
              edgeSetting: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon59726608',
                isInjection: true,
              },
              topCardCallouts: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon256842417',
                isInjection: true,
              },
              entityUrn: { type: 'string' },
              followingState: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon89639392',
                isInjection: true,
              },
              profileRingStatusCollection: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon1936086081',
                isInjection: true,
              },
              companyNameOnProfileTopCardShown: { type: 'boolean' },
              profileVideoUnion: {
                type: {
                  union: {
                    unavailableState: 'string',
                    promotionalVideo:
                      'com.linkedin.deco.recipe.anonymous.Anon886273009',
                    processedVideo:
                      'com.linkedin.deco.recipe.anonymous.Anon1196279127',
                  },
                },
              },
              creatorBadgeStatus: { type: 'string' },
              location: {
                type: 'com.linkedin.voyager.dash.deco.identity.profile.ProfileLocation',
              },
              presenceStatus: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon938007357',
                isInjection: true,
              },
              profileStatefulProfileActions: {
                type: 'com.linkedin.voyager.dash.deco.identity.profile.ProfileActionsWithSupplementaryInjection',
                isInjection: true,
              },
              fullNamePronunciationAudio: {
                type: 'com.linkedin.voyager.dash.deco.identity.profile.TopCardSupplementarycom.linkedin.voyager.dash.common.AudioMetadata',
              },
              connections: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon1697831042',
                isInjection: true,
              },
            },
            baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
          },
        'com.linkedin.deco.recipe.anonymous.Anon1760283115': {
          fields: {
            entityUrn: { type: 'string' },
            preDashFollowingInfoUrn: { type: 'string' },
            following: { type: 'boolean' },
          },
          baseType: 'com.linkedin.voyager.dash.feed.FollowingState',
        },
        'com.linkedin.voyager.dash.deco.common.text.LearningCourse': {
          fields: { title: { type: 'string' }, entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.learning.LearningCourse',
        },
        'com.linkedin.deco.recipe.anonymous.Anon50101142': {
          fields: {
            ringStatus: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1320789737',
            },
            profileUrn: { type: 'string' },
            vectorImage: {
              type: 'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
            },
            profile: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon587401631',
              resolvedFrom: 'profileUrn',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.common.image.NonEntityProfilePicture',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1697831042': {
          fields: {
            paging: {
              type: 'com.linkedin.voyager.dash.deco.common.FullPaging',
            },
            elements: {
              type: {
                array: 'com.linkedin.deco.recipe.anonymous.Anon2134644859',
              },
            },
          },
          baseType: 'com.linkedin.restli.common.CollectionResponse',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1462572720': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.publishing.SubscribeAction',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1566936928': {
          fields: {
            company: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1226238669',
              resolvedFrom: 'companyUrn',
            },
            multiLocaleCompanyName: { type: { map: 'string' } },
            entityUrn: { type: 'string' },
            dateRange: {
              type: 'com.linkedin.voyager.dash.deco.common.DateRange',
            },
            companyUrn: { type: 'string' },
            companyName: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Position',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.DimissAction':
          {
            fields: {
              actionDelegateUrn: { type: 'string' },
              actionControlName: { type: 'string' },
              legoTrackingId: { type: 'string' },
              buttonAppearance: {
                type: 'com.linkedin.voyager.dash.deco.common.ux.ButtonAppearance',
              },
            },
            baseType:
              'com.linkedin.voyager.dash.identity.profile.tetris.DismissAction',
          },
        'com.linkedin.voyager.dash.deco.identity.profile.ProfilePhotoDecoSpecReadOnlyProfilePicture':
          {
            fields: {
              displayImageWithFrameReferenceUnion: {
                type: {
                  union: {
                    url: 'string',
                    vectorImage:
                      'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                  },
                },
              },
              frameType: { type: 'string' },
              a11yText: { type: 'string' },
              displayImageUrn: { type: 'string' },
              displayImageReference: {
                type: {
                  union: {
                    url: 'string',
                    vectorImage:
                      'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                  },
                },
              },
            },
            baseType:
              'com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture',
          },
        'com.linkedin.deco.recipe.anonymous.Anon692733641': {
          fields: {
            recommendationUrn: { type: 'string' },
            controlName: { type: 'string' },
            recommendation: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1710561493',
              resolvedFrom: 'recommendationUrn',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.RecommendationAction',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1710923302': {
          fields: {
            treasuryMedia: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1694510658',
              resolvedFrom: 'treasuryMediaUrn',
            },
            controlName: { type: 'string' },
            treasuryMediaUrn: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.DeleteTreasuryAction',
        },
        'com.linkedin.deco.recipe.anonymous.Anon858976209': {
          fields: { type: { type: 'string' }, epochAt: { type: 'long' } },
          baseType: 'com.linkedin.voyager.dash.common.text.EpochTime',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1549551057': {
          fields: {
            endorseControlName: { type: 'string' },
            endorsedSkillUrn: { type: 'string' },
            unendorseControlName: { type: 'string' },
            endorsedSkill: {
              type: 'com.linkedin.voyager.dash.deco.identity.profile.EndorsedSkill',
              resolvedFrom: 'endorsedSkillUrn',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.EndorsedSkillAction',
        },
        'com.linkedin.voyager.dash.deco.common.image.ImageAttribute': {
          fields: {
            detailData: {
              type: {
                union: {
                  profilePictureWithoutFrame:
                    'com.linkedin.voyager.dash.deco.common.image.ProfileWithoutFrame',
                  profilePicture:
                    'com.linkedin.voyager.dash.deco.common.image.Profile',
                  profilePictureWithRingStatus:
                    'com.linkedin.voyager.dash.deco.common.image.ProfileWithRingStatus',
                  companyLogo:
                    'com.linkedin.voyager.dash.deco.common.image.Company',
                  professionalEventLogo:
                    'com.linkedin.voyager.dash.deco.common.image.ProfessionalEvent',
                  organizationalPageLogo:
                    'com.linkedin.voyager.dash.deco.common.image.OrganizationalPage',
                  schoolLogo:
                    'com.linkedin.voyager.dash.deco.common.image.School',
                  groupLogo:
                    'com.linkedin.voyager.dash.deco.common.image.Group',
                },
              },
              resolvedFrom: 'detailDataUnion',
            },
            tintColor: { type: 'string' },
            detailDataUnion: {
              type: {
                union: {
                  profilePictureWithoutFrame: 'string',
                  profilePictureWithRingStatus: 'string',
                  companyLogo: 'string',
                  icon: 'string',
                  systemImage: 'string',
                  nonEntityGroupLogo:
                    'com.linkedin.deco.recipe.anonymous.Anon1436383648',
                  organizationalPageLogo: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                  nonEntityProfessionalEventLogo:
                    'com.linkedin.deco.recipe.anonymous.Anon377984030',
                  profilePicture: 'string',
                  imageUrl: 'com.linkedin.deco.recipe.anonymous.Anon1529112441',
                  professionalEventLogo: 'string',
                  nonEntitySchoolLogo:
                    'com.linkedin.deco.recipe.anonymous.Anon1568806612',
                  nonEntityCompanyLogo:
                    'com.linkedin.deco.recipe.anonymous.Anon648914460',
                  schoolLogo: 'string',
                  groupLogo: 'string',
                  ghostImage: 'string',
                  nonEntityProfilePicture:
                    'com.linkedin.deco.recipe.anonymous.Anon50101142',
                },
              },
            },
            tapTargets: {
              type: {
                array:
                  'com.linkedin.voyager.dash.deco.common.TapTargetWithoutEntity',
              },
            },
            scalingType: { type: 'string' },
            displayAspectRatio: { type: 'double' },
          },
          baseType: 'com.linkedin.voyager.dash.common.image.ImageAttribute',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.ViewProfileInExternalContextAction':
          {
            fields: {
              deeplinkUrl: { type: 'string' },
              recruiterContext: { type: 'boolean' },
            },
            baseType:
              'com.linkedin.voyager.dash.identity.profile.actions.ViewProfileInExternalContextAction',
          },
        'com.linkedin.voyager.dash.deco.common.ux.ButtonAppearance': {
          fields: {
            premiumStyle: { type: 'boolean' },
            size: { type: 'string' },
            icon: { type: 'string' },
            text: { type: 'string' },
            iconAfterText: { type: 'boolean' },
            emphasize: { type: 'boolean' },
            category: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.common.ux.button.ButtonAppearance',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.tetris.NavigationAction':
          {
            fields: {
              buttonPlacement: { type: 'string' },
              legoTrackingId: { type: 'string' },
              buttonAppearance: {
                type: 'com.linkedin.voyager.dash.deco.common.ux.ButtonAppearance',
              },
              icon: {
                type: 'com.linkedin.voyager.dash.deco.common.image.ImageViewModel',
              },
              actionControlName: { type: 'string' },
              text: {
                type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
              },
              actionTarget: { type: 'string' },
              accessibilityText: { type: 'string' },
            },
            baseType:
              'com.linkedin.voyager.dash.identity.profile.tetris.NavigationAction',
          },
        'com.linkedin.deco.recipe.anonymous.Anon1843097075': {
          fields: {
            invitationUnion: {
              type: {
                union: {
                  noInvitation:
                    'com.linkedin.deco.recipe.anonymous.Anon881636240',
                  invitation:
                    'com.linkedin.deco.recipe.anonymous.Anon1286825962',
                },
              },
            },
          },
          baseType: 'com.linkedin.voyager.dash.relationships.NoConnection',
        },
        'com.linkedin.deco.recipe.anonymous.Anon947840432': {
          fields: { entityUrn: { type: 'string' } },
          baseType:
            'com.linkedin.voyager.dash.relationships.MemberRelationship',
        },
        'com.linkedin.voyager.dash.deco.common.image.ProfileWithRingStatus': {
          fields: {
            ringStatus: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1080314395',
              isInjection: true,
            },
            profilePicture: {
              type: 'com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture',
            },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.deco.recipe.anonymous.Anon669380621': {
          fields: {
            deletableItemUrn: { type: 'string' },
            controlName: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.DeleteEntityAction',
        },
        'com.linkedin.deco.recipe.anonymous.Anon89639392': {
          fields: {
            followerCount: { type: 'long' },
            entityUrn: { type: 'string' },
            preDashFollowingInfoUrn: { type: 'string' },
            following: { type: 'boolean' },
          },
          baseType: 'com.linkedin.voyager.dash.feed.FollowingState',
        },
        'com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture': {
          fields: {
            displayImageWithFrameReferenceUnion: {
              type: {
                union: {
                  url: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                },
              },
            },
            a11yText: { type: 'string' },
            displayImageReference: {
              type: {
                union: {
                  url: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                },
              },
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.EndorsedSkill': {
          fields: {
            endorsement: {
              type: { map: 'com.linkedin.deco.recipe.anonymous.Anon715554404' },
              resolvedFrom: 'endorsementUrns',
            },
            entityUrn: { type: 'string' },
            endorsementUrns: { type: { array: 'string' } },
            endorsedByViewer: { type: 'boolean' },
            endorsementCount: { type: 'int' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.EndorsedSkill',
        },
        'com.linkedin.voyager.dash.deco.common.text.Company': {
          fields: { name: { type: 'string' }, entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.organization.Company',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.CollapseExpandAction':
          {
            fields: {
              collapseAccessibilityText: { type: 'string' },
              actionDelegateUrn: { type: 'string' },
              expandAccessibilityText: { type: 'string' },
              collapseActionControlName: { type: 'string' },
              expandActionControlName: { type: 'string' },
              collapsed: { type: 'boolean' },
            },
            baseType:
              'com.linkedin.voyager.dash.identity.profile.tetris.CollapseExpandAction',
          },
        'com.linkedin.deco.recipe.anonymous.Anon655007389': {
          fields: {
            name: {
              type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
            },
            imageUnion: {
              type: {
                union: {
                  url: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                },
              },
            },
          },
          baseType:
            'com.linkedin.voyager.dash.common.media.StickerLinkSmallTemplateView',
        },
        'com.linkedin.voyager.dash.deco.common.video.TranscriptLine': {
          fields: {
            lineStartAt: { type: 'long' },
            caption: { type: 'string' },
            lineEndAt: { type: 'long' },
          },
          baseType: 'com.linkedin.videocontent.TranscriptLine',
        },
        'com.linkedin.deco.recipe.anonymous.Anon735489647': {
          fields: { entityUrn: { type: 'string' } },
          baseType:
            'com.linkedin.voyager.dash.identity.notifications.edgesetting.EdgeSetting',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1927941263': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.organization.Company',
        },
        'com.linkedin.voyager.dash.deco.common.image.ProfileWithoutFrame': {
          fields: {
            profilePicture: {
              type: 'com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture',
            },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1399568931': {
          fields: { controlName: { type: 'string' }, url: { type: 'string' } },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.ActionTarget',
        },
        'com.linkedin.deco.recipe.anonymous.Anon587401631': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.voyager.dash.deco.common.text.OrganizationalPage': {
          fields: {
            entityUrn: { type: 'string' },
            localizedName: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.organization.OrganizationalPage',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1031101697': {
          fields: {
            targetInviteeResolutionResult: {
              type: 'com.linkedin.voyager.dash.deco.relationships.ProfileWithEmailRequired',
              resolvedFrom: 'targetInvitee',
            },
            inviter: { type: 'string' },
            targetInvitee: { type: 'string' },
            invitationRelationshipForm: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon918376989',
            },
            inviterResolutionResult: {
              type: 'com.linkedin.voyager.dash.deco.relationships.ProfileWithIweWarned',
              resolvedFrom: 'inviter',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.invitation.NoInvitation',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1621960601': {
          fields: {
            name: { type: 'string' },
            logo: {
              type: {
                union: {
                  url: 'string',
                  vectorImage:
                    'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
                },
              },
            },
            entityUrn: { type: 'string' },
            url: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.organization.School',
        },
        'com.linkedin.deco.recipe.anonymous.Anon199392175': {
          fields: {
            paidInMail: { type: 'boolean' },
            recipient: {
              type: { map: 'com.linkedin.deco.recipe.anonymous.Anon587401631' },
              resolvedFrom: 'recipientUrns',
            },
            messageRequestContextUrn: { type: 'string' },
            recipientUrns: { type: { array: 'string' } },
            targetUrl: { type: 'string' },
            existingConversation: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon807183080',
              resolvedFrom: 'existingConversationUrn',
            },
            existingConversationUrn: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.messaging.compose.ComposeNavigationContext',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1320789737': {
          fields: {
            ringContentType: { type: 'string' },
            actionTarget: { type: 'string' },
            preDashEntityUrn: { type: 'string' },
            entityUrn: { type: 'string' },
            emphasized: { type: 'boolean' },
          },
          baseType: 'com.linkedin.voyager.dash.common.image.RingStatus',
        },
        'com.linkedin.deco.recipe.anonymous.Anon263289509': {
          fields: {
            unfeatureControlName: { type: 'string' },
            featuredItemCardUrn: { type: 'string' },
            featureControlName: { type: 'string' },
            featuredItemCard: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1479096976',
              resolvedFrom: 'featuredItemCardUrn',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.FeatureOrUnfeatureAction',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.ProfileActionsWithSupplementaryInjection':
          {
            fields: {
              secondaryActionResolutionResult: {
                type: {
                  union: {
                    personalizedConnect:
                      'com.linkedin.deco.recipe.anonymous.Anon4539795',
                    saveToPdf:
                      'com.linkedin.deco.recipe.anonymous.Anon587401631',
                    followingState:
                      'com.linkedin.deco.recipe.anonymous.Anon1760283115',
                    ignore: 'com.linkedin.deco.recipe.anonymous.Anon1312950162',
                    composeOption:
                      'com.linkedin.deco.recipe.anonymous.Anon545512017',
                    withdraw:
                      'com.linkedin.deco.recipe.anonymous.Anon1213132949',
                    saveInSalesNavigatorState:
                      'com.linkedin.deco.recipe.anonymous.Anon1975396536',
                  },
                },
                resolvedFrom: 'secondaryAction',
              },
              primaryActionResolutionResult: {
                type: {
                  union: {
                    personalizedConnect:
                      'com.linkedin.deco.recipe.anonymous.Anon4539795',
                    saveToPdf:
                      'com.linkedin.deco.recipe.anonymous.Anon587401631',
                    followingState:
                      'com.linkedin.deco.recipe.anonymous.Anon1760283115',
                    ignore: 'com.linkedin.deco.recipe.anonymous.Anon1312950162',
                    composeOption:
                      'com.linkedin.deco.recipe.anonymous.Anon545512017',
                    withdraw:
                      'com.linkedin.deco.recipe.anonymous.Anon1213132949',
                    saveInSalesNavigatorState:
                      'com.linkedin.deco.recipe.anonymous.Anon1975396536',
                  },
                },
                resolvedFrom: 'primaryAction',
              },
              trackingIdentifier: { type: 'bytes' },
              primaryAction: {
                type: {
                  union: {
                    personalizedConnect: 'string',
                    saveToPdf: 'string',
                    shareProfileUrlViaMessage: 'string',
                    saveToPdfUrl: 'string',
                    composeOption: 'string',
                    saveInSalesNavigatorState: 'string',
                    statefulAction:
                      'com.linkedin.voyager.dash.deco.common.ux.StatefulButtonModel',
                    viewProfileInExternalContext:
                      'com.linkedin.voyager.dash.deco.identity.profile.ViewProfileInExternalContextAction',
                    statelessAction: 'string',
                    followingState: 'string',
                    report: 'com.linkedin.deco.recipe.anonymous.Anon743120773',
                    ignore: 'string',
                    shareProfileUrl: 'string',
                    connection:
                      'com.linkedin.voyager.dash.deco.identity.profile.MemberRelationshipWrapper',
                    withdraw: 'string',
                  },
                },
              },
              supplementaryAction: {
                type: {
                  union: {
                    personalizedConnect:
                      'com.linkedin.deco.recipe.anonymous.Anon4539795',
                    saveToPdf:
                      'com.linkedin.deco.recipe.anonymous.Anon587401631',
                    followingState:
                      'com.linkedin.deco.recipe.anonymous.Anon1760283115',
                    ignore: 'com.linkedin.deco.recipe.anonymous.Anon1312950162',
                    composeOption:
                      'com.linkedin.deco.recipe.anonymous.Anon545512017',
                    withdraw:
                      'com.linkedin.deco.recipe.anonymous.Anon1213132949',
                    saveInSalesNavigatorState:
                      'com.linkedin.deco.recipe.anonymous.Anon1975396536',
                  },
                },
                resolvedFrom: 'supplementaryActionUnion',
              },
              supplementaryActionUnion: {
                type: {
                  union: {
                    personalizedConnect: 'string',
                    saveToPdf: 'string',
                    shareProfileUrlViaMessage: 'string',
                    saveToPdfUrl: 'string',
                    composeOption: 'string',
                    saveInSalesNavigatorState: 'string',
                    statefulAction:
                      'com.linkedin.voyager.dash.deco.common.ux.StatefulButtonModel',
                    viewProfileInExternalContext:
                      'com.linkedin.voyager.dash.deco.identity.profile.ViewProfileInExternalContextAction',
                    statelessAction: 'string',
                    followingState: 'string',
                    report: 'com.linkedin.deco.recipe.anonymous.Anon743120773',
                    ignore: 'string',
                    shareProfileUrl: 'string',
                    connection:
                      'com.linkedin.voyager.dash.deco.identity.profile.MemberRelationshipWrapper',
                    withdraw: 'string',
                  },
                },
              },
              secondaryAction: {
                type: {
                  union: {
                    personalizedConnect: 'string',
                    saveToPdf: 'string',
                    shareProfileUrlViaMessage: 'string',
                    saveToPdfUrl: 'string',
                    composeOption: 'string',
                    saveInSalesNavigatorState: 'string',
                    statefulAction:
                      'com.linkedin.voyager.dash.deco.common.ux.StatefulButtonModel',
                    viewProfileInExternalContext:
                      'com.linkedin.voyager.dash.deco.identity.profile.ViewProfileInExternalContextAction',
                    statelessAction: 'string',
                    followingState: 'string',
                    report: 'com.linkedin.deco.recipe.anonymous.Anon743120773',
                    ignore: 'string',
                    shareProfileUrl: 'string',
                    connection:
                      'com.linkedin.voyager.dash.deco.identity.profile.MemberRelationshipWrapper',
                    withdraw: 'string',
                  },
                },
              },
              overflowActionsResolutionResults: {
                type: {
                  map: {
                    union: {
                      personalizedConnect:
                        'com.linkedin.deco.recipe.anonymous.Anon4539795',
                      saveToPdf:
                        'com.linkedin.deco.recipe.anonymous.Anon587401631',
                      followingState:
                        'com.linkedin.deco.recipe.anonymous.Anon1760283115',
                      ignore:
                        'com.linkedin.deco.recipe.anonymous.Anon1312950162',
                      composeOption:
                        'com.linkedin.deco.recipe.anonymous.Anon545512017',
                      withdraw:
                        'com.linkedin.deco.recipe.anonymous.Anon1213132949',
                      saveInSalesNavigatorState:
                        'com.linkedin.deco.recipe.anonymous.Anon1975396536',
                    },
                  },
                },
                resolvedFrom: 'overflowActions',
              },
              overflowActions: {
                type: {
                  array: {
                    union: {
                      personalizedConnect: 'string',
                      saveToPdf: 'string',
                      shareProfileUrlViaMessage: 'string',
                      saveToPdfUrl: 'string',
                      composeOption: 'string',
                      saveInSalesNavigatorState: 'string',
                      statefulAction:
                        'com.linkedin.voyager.dash.deco.common.ux.StatefulButtonModel',
                      viewProfileInExternalContext:
                        'com.linkedin.voyager.dash.deco.identity.profile.ViewProfileInExternalContextAction',
                      statelessAction: 'string',
                      followingState: 'string',
                      report:
                        'com.linkedin.deco.recipe.anonymous.Anon743120773',
                      ignore: 'string',
                      shareProfileUrl: 'string',
                      connection:
                        'com.linkedin.voyager.dash.deco.identity.profile.MemberRelationshipWrapper',
                      withdraw: 'string',
                    },
                  },
                },
              },
              trackingId: { type: 'string' },
            },
            baseType:
              'com.linkedin.voyager.dash.identity.profile.actions.ProfileActions',
          },
        'com.linkedin.deco.recipe.anonymous.Anon163061530': {
          fields: { name: { type: 'string' }, entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.groups.Group',
        },
        'com.linkedin.deco.recipe.anonymous.Anon886273009': {
          fields: {
            videoUrl: { type: 'string' },
            legoTrackingId: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.PromotionalProfileVideo',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.OpenProfileGeneratedSuggestionsFlowAction':
          {
            fields: {
              actionControlName: { type: 'string' },
              accessibilityText: { type: 'string' },
              profileUrn: { type: 'string' },
              profile: {
                type: 'com.linkedin.deco.recipe.anonymous.Anon587401631',
                resolvedFrom: 'profileUrn',
              },
              legoTrackingId: { type: 'string' },
              buttonAppearance: {
                type: 'com.linkedin.voyager.dash.deco.common.ux.ButtonAppearance',
              },
            },
            baseType:
              'com.linkedin.voyager.dash.identity.profile.tetris.OpenProfileGeneratedSuggestionsFlowAction',
          },
        'com.linkedin.deco.recipe.anonymous.Anon807183080': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.messaging.Conversation',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.SeeMoreOrLessAction':
          {
            fields: {
              actionDelegateUrn: { type: 'string' },
              seeMoreActionControlName: { type: 'string' },
              seeMoreText: {
                type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
              },
              seeLessText: {
                type: 'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
              },
              seeLessActionControlName: { type: 'string' },
            },
            baseType:
              'com.linkedin.voyager.dash.identity.profile.tetris.SeeMoreOrLessAction',
          },
        'com.linkedin.voyager.dash.deco.relationships.profile': {
          fields: {
            lastName: { type: 'string' },
            firstName: { type: 'string' },
            creator: { type: 'boolean' },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.voyager.dash.deco.common.text.ProfileForFullName': {
          fields: {
            lastName: { type: 'string' },
            firstName: { type: 'string' },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1874268369': {
          fields: {
            controlName: { type: 'string' },
            recommendationRequestUrn: { type: 'string' },
            recommendationRequest: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon671932728',
              resolvedFrom: 'recommendationRequestUrn',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.IgnoreRecommendationRequestAction',
        },
        'com.linkedin.voyager.dash.deco.common.image.Profile': {
          fields: {
            profilePicture: {
              type: 'com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture',
            },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.voyager.dash.deco.common.text.JobPosting': {
          fields: { title: { type: 'string' }, entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.jobs.JobPosting',
        },
        'com.linkedin.deco.recipe.anonymous.Anon378816379': {
          fields: {
            viewer: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon430310092',
              resolvedFrom: 'viewerUrn',
            },
            company: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon660720507',
              resolvedFrom: 'companyUrn',
            },
            companyUrn: { type: 'string' },
            viewerUrn: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.MemberToCompanyFollowMetadata',
        },
        'com.linkedin.voyager.dash.deco.common.text.TextAttributeV2': {
          fields: {
            start: { type: 'int' },
            length: { type: 'int' },
            detailData: {
              type: {
                union: {
                  jobPostingName:
                    'com.linkedin.voyager.dash.deco.common.text.JobPosting',
                  profileFamiliarName:
                    'com.linkedin.voyager.dash.deco.common.text.ProfileForFamiliarName',
                  groupName: 'com.linkedin.deco.recipe.anonymous.Anon163061530',
                  profileFullName:
                    'com.linkedin.voyager.dash.deco.common.text.ProfileForFullName',
                  learningCourseName:
                    'com.linkedin.voyager.dash.deco.common.text.LearningCourse',
                  companyName:
                    'com.linkedin.voyager.dash.deco.common.text.Company',
                  profileMention:
                    'com.linkedin.voyager.dash.deco.common.text.ProfileForMention',
                  schoolName:
                    'com.linkedin.voyager.dash.deco.common.text.School',
                  organizationalPageName:
                    'com.linkedin.voyager.dash.deco.common.text.OrganizationalPage',
                  hashtag: 'com.linkedin.voyager.dash.deco.common.text.Hashtag',
                },
              },
              resolvedFrom: 'detailDataUnion',
            },
            detailDataUnion: {
              type: {
                union: {
                  jobPostingName: 'string',
                  profileFamiliarName: 'string',
                  hyperlink: 'string',
                  color: 'string',
                  companyName: 'string',
                  icon: 'string',
                  systemImage: 'string',
                  epoch: 'com.linkedin.deco.recipe.anonymous.Anon858976209',
                  organizationalPageName: 'string',
                  textLink: 'com.linkedin.deco.recipe.anonymous.Anon1465360068',
                  listItemStyle:
                    'com.linkedin.deco.recipe.anonymous.Anon409680083',
                  hyperlinkOpenExternally: 'string',
                  listStyle: 'string',
                  groupName: 'string',
                  profileFullName: 'string',
                  stringFieldReference:
                    'com.linkedin.deco.recipe.anonymous.Anon1251747613',
                  learningCourseName: 'string',
                  profileMention: 'string',
                  style: 'string',
                  schoolName: 'string',
                  hashtag: 'string',
                },
              },
            },
          },
          baseType: 'com.linkedin.voyager.dash.common.text.TextAttribute',
        },
        'com.linkedin.deco.recipe.anonymous.Anon743120773': {
          fields: {
            authorProfileId: { type: 'string' },
            targetUrn: { type: 'string' },
            contentSource: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.common.semaphore.SemaphoreContext',
        },
        'com.linkedin.deco.recipe.anonymous.Anon964860152': {
          fields: {
            paging: {
              type: 'com.linkedin.voyager.dash.deco.common.FullPaging',
            },
            elements: {
              type: {
                array: 'com.linkedin.deco.recipe.anonymous.Anon487759616',
              },
            },
          },
          baseType: 'com.linkedin.restli.common.CollectionResponse',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1213132949': {
          fields: {
            entityUrn: { type: 'string' },
            memberRelationshipUnion: {
              type: {
                union: {
                  self: 'com.linkedin.restli.common.EmptyRecord',
                  connection:
                    'com.linkedin.deco.recipe.anonymous.Anon2134644859',
                  noConnection:
                    'com.linkedin.deco.recipe.anonymous.Anon1843097075',
                },
              },
            },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.MemberRelationship',
        },
        'com.linkedin.voyager.dash.deco.common.ux.RelationshipActionData': {
          fields: {
            relationshipsTrackingId: { type: 'bytes' },
            relationshipData: {
              type: {
                union: {
                  connectionOrInvitation:
                    'com.linkedin.voyager.dash.deco.relationships.MemberRelationshipV2',
                  memberToEntityRelationship:
                    'com.linkedin.voyager.dash.deco.relationships.DirectionalEntityRelationship',
                },
              },
              resolvedFrom: 'relationshipDataUnion',
            },
            relationshipDataUnion: {
              type: {
                union: {
                  connectionOrInvitation: 'string',
                  memberToEntityRelationship: 'string',
                },
              },
            },
            moduleKey: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.common.relationships.RelationshipActionData',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.MemberRelationshipWrapper':
          {
            fields: {
              memberRelationshipUrn: { type: 'string' },
              memberRelationship: {
                type: 'com.linkedin.voyager.dash.deco.relationships.MemberRelationshipV2',
                resolvedFrom: 'memberRelationshipUrn',
              },
            },
            baseType:
              'com.linkedin.voyager.dash.relationships.MemberRelationshipWrapper',
          },
        'com.linkedin.voyager.dash.deco.relationships.NoConnection': {
          fields: {
            memberDistance: { type: 'string' },
            invitationUnion: {
              type: {
                union: {
                  noInvitation:
                    'com.linkedin.deco.recipe.anonymous.Anon1031101697',
                  invitation:
                    'com.linkedin.voyager.dash.deco.relationships.Invitation',
                },
              },
            },
          },
          baseType: 'com.linkedin.voyager.dash.relationships.NoConnection',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1196279127': {
          fields: {
            previewVideo: {
              type: 'com.linkedin.voyager.dash.deco.common.video.VideoPlayMetadata',
            },
            reportSemaphoreContext: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon743120773',
            },
            fullVideo: {
              type: 'com.linkedin.voyager.dash.deco.common.video.VideoPlayMetadata',
            },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.ProfileVideo',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1052602939': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.identity.profile.tetris.Card',
        },
        'com.linkedin.deco.recipe.anonymous.Anon191738356': {
          fields: {
            metadataUnion: {
              type: {
                union: {
                  memberToMemberFollow:
                    'com.linkedin.deco.recipe.anonymous.Anon198476569',
                  memberToCompanyFollow:
                    'com.linkedin.deco.recipe.anonymous.Anon378816379',
                },
              },
            },
            followingStateUrn: { type: 'string' },
            followingState: {
              type: 'com.linkedin.voyager.dash.deco.feed.FollowingState',
              resolvedFrom: 'followingStateUrn',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.FollowRelationship',
        },
        'com.linkedin.deco.recipe.anonymous.Anon40833127': {
          fields: {
            metadataUnion: {
              type: {
                union: {
                  memberToContentSeriesSubscribe:
                    'com.linkedin.deco.recipe.anonymous.Anon489758292',
                },
              },
            },
            subscribeActionUrn: { type: 'string' },
            subscribeAction: {
              type: 'com.linkedin.voyager.dash.deco.feed.publishing.SubscribeAction',
              resolvedFrom: 'subscribeActionUrn',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.SubscribeRelationship',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1350007507': {
          fields: {
            saved: { type: 'boolean' },
            preDashEntityUrn: { type: 'string' },
            entityUrn: { type: 'string' },
          },
          baseType: 'com.linkedin.voyager.dash.feed.SaveState',
        },
        'com.linkedin.deco.recipe.anonymous.Anon134780763': {
          fields: {
            buttonPlacement: { type: 'string' },
            entityToVerify: { type: 'string' },
            actionControlName: { type: 'string' },
            accessibilityText: { type: 'string' },
            buttonAppearance: {
              type: 'com.linkedin.voyager.dash.deco.common.ux.ButtonAppearance',
            },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.EntityVerificationAction',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1503466663': {
          fields: {
            icon: {
              type: 'com.linkedin.voyager.dash.deco.common.image.ImageViewModel',
            },
            items: {
              type: {
                array: 'com.linkedin.deco.recipe.anonymous.Anon94387579',
              },
            },
            actionControlName: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.tetris.OverflowAction',
        },
        'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.ComposeOptionAction':
          {
            fields: {
              prefilledSubject: { type: 'string' },
              prefilledMessage: { type: 'string' },
              composeOptionResolutionResult: {
                type: 'com.linkedin.voyager.dash.deco.identity.profile.tetris.card.ComposeOption',
                resolvedFrom: 'composeOption',
              },
              actionControlName: { type: 'string' },
              composeOption: { type: 'string' },
            },
            baseType:
              'com.linkedin.voyager.dash.identity.profile.tetris.ComposeOptionAction',
          },
        'com.linkedin.deco.recipe.anonymous.Anon336652209': {
          fields: {
            profilePicture: {
              type: 'com.linkedin.voyager.dash.deco.identity.profile.ProfilePhotoDecoSpecReadOnlyProfilePicture',
            },
            memorialized: { type: 'boolean' },
            lastName: { type: 'string' },
            firstName: { type: 'string' },
            tempStatus: { type: 'string' },
            entityUrn: { type: 'string' },
            tempStatusEmoji: { type: 'string' },
            publicIdentifier: { type: 'string' },
            headline: { type: 'string' },
            tempStatusExpiredAtUnion: {
              type: {
                union: {
                  customizedExpiredAt: 'long',
                  standardizedExpiration: 'string',
                },
              },
            },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.deco.recipe.anonymous.Anon1436383648': {
          fields: {
            groupUrn: { type: 'string' },
            vectorImage: {
              type: 'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
            },
            group: {
              type: 'com.linkedin.deco.recipe.anonymous.Anon1869367056',
              resolvedFrom: 'groupUrn',
            },
          },
          baseType: 'com.linkedin.voyager.dash.common.image.NonEntityGroupLogo',
        },
        'com.linkedin.voyager.dash.deco.common.VectorArtifact': {
          fields: {
            width: { type: 'int' },
            fileIdentifyingUrlPathSegment: { type: 'string' },
            expiresAt: { type: 'long' },
            height: { type: 'int' },
          },
          baseType: 'com.linkedin.common.VectorArtifact',
        },
        'com.linkedin.voyager.dash.deco.common.text.School': {
          fields: { name: { type: 'string' }, entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.organization.School',
        },
        'com.linkedin.deco.recipe.anonymous.Anon2066892616': {
          fields: {
            invitationType: { type: 'string' },
            invitationId: { type: 'long' },
            sharedSecret: { type: 'string' },
            entityUrn: { type: 'string' },
          },
          baseType:
            'com.linkedin.voyager.dash.relationships.invitation.Invitation',
        },
        'com.linkedin.deco.recipe.anonymous.Anon671932728': {
          fields: { entityUrn: { type: 'string' } },
          baseType:
            'com.linkedin.voyager.dash.identity.profile.recommendations.RecommendationRequest',
        },
        'com.linkedin.deco.recipe.anonymous.Anon2134644859': {
          fields: { entityUrn: { type: 'string' } },
          baseType: 'com.linkedin.voyager.dash.relationships.Connection',
        },
        'com.linkedin.deco.recipe.anonymous.Anon430310092': {
          fields: {
            entityUrn: { type: 'string' },
            creator: { type: 'boolean' },
          },
          baseType: 'com.linkedin.voyager.dash.identity.profile.Profile',
        },
        'com.linkedin.deco.recipe.anonymous.Anon256842417': {
          fields: {
            elements: {
              type: {
                array: 'com.linkedin.deco.recipe.anonymous.Anon1106795004',
              },
            },
          },
          baseType: 'com.linkedin.restli.common.CollectionResponse',
        },
      },
    },
  },
  included: [
    {
      entityUrn:
        'urn:li:collectionResponse:Fe9FczogO79N9drabyuQh7RwqgCKg33J5+xJ5jJlUAw=',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon306926154'],
      elements: [],
      $type: 'com.linkedin.restli.common.CollectionResponse',
    },
    {
      paging: {
        total: 7,
        start: 0,
        count: 1,
        links: [],
        $recipeTypes: ['com.linkedin.voyager.dash.deco.common.FullPaging'],
        $type: 'com.linkedin.restli.common.CollectionMetadata',
      },
      '*elements': [
        'urn:li:fsd_profilePosition:(ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o,2073348233)',
      ],
      entityUrn:
        'urn:li:collectionResponse:3g6dWOzURVH5qQ5Z7+rz+9yRQVRBkjPUtEOtk3EabjQ=',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon1449981882'],
      $type: 'com.linkedin.restli.common.CollectionResponse',
    },
    {
      paging: {
        start: 0,
        count: 10,
        links: [],
        $recipeTypes: ['com.linkedin.voyager.dash.deco.common.FullPaging'],
        $type: 'com.linkedin.restli.common.CollectionMetadata',
      },
      entityUrn:
        'urn:li:collectionResponse:+hw6+UrPxI7HwE0j/lntOsjpWgjQz6h533YmGXalMKY=',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon429038699'],
      elements: [],
      $type: 'com.linkedin.restli.common.CollectionResponse',
    },
    {
      '*elements': [
        'urn:li:fsd_relInsight:(urn:li:fsd_profile:ACoAAAiclcoBW8M0fw3x7fCR2gsx2VzftQtGkOI,urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o,PROFILE)',
      ],
      entityUrn:
        'urn:li:collectionResponse:ELu8+LuoO1AFNK54V7YVQ/rJ6E3jFXgZ6/F+JvW3Szg=',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon1479950671'],
      $type: 'com.linkedin.restli.common.CollectionResponse',
    },
    {
      entityUrn:
        'urn:li:collectionResponse:9I9D6ZmP2NiTFp4zPXkPtMBn3De9BHB3oHAB03Wq3OI=',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon256842417'],
      elements: [],
      $type: 'com.linkedin.restli.common.CollectionResponse',
    },
    {
      paging: {
        start: 0,
        count: 10,
        links: [],
        $recipeTypes: ['com.linkedin.voyager.dash.deco.common.FullPaging'],
        $type: 'com.linkedin.restli.common.CollectionMetadata',
      },
      entityUrn:
        'urn:li:collectionResponse:Xe+I1V9S4RWH9BtivNAMxC2Yeb0M8EYnTliRLpsthQ0=',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon1936086081'],
      elements: [],
      $type: 'com.linkedin.restli.common.CollectionResponse',
    },
    {
      paging: {
        total: 422,
        start: 0,
        count: 1,
        links: [],
        $recipeTypes: ['com.linkedin.voyager.dash.deco.common.FullPaging'],
        $type: 'com.linkedin.restli.common.CollectionMetadata',
      },
      '*elements': [
        'urn:li:fsd_connection:ACoAAAAVWAQB8MIQG7kvftDDFBWaCTz0nX2wT-g',
      ],
      entityUrn:
        'urn:li:collectionResponse:tQR4myPUvGGItN96N/dJvlw1jiXkj/phkPvoJNGN+7k=',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon1697831042'],
      $type: 'com.linkedin.restli.common.CollectionResponse',
    },
    {
      paging: {
        total: 2,
        start: 0,
        count: 1,
        links: [],
        $recipeTypes: ['com.linkedin.voyager.dash.deco.common.FullPaging'],
        $type: 'com.linkedin.restli.common.CollectionMetadata',
      },
      '*elements': [
        'urn:li:fsd_profileEducation:(ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o,292168220)',
      ],
      entityUrn:
        'urn:li:collectionResponse:RRR/GPLr+5IX9eiYY/lXS19i/FN7XXXsid0xbfczRFs=',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon964860152'],
      $type: 'com.linkedin.restli.common.CollectionResponse',
    },
    {
      entityUrn:
        'urn:li:fsd_followingState:urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
      following: false,
      preDashFollowingInfoUrn:
        'urn:li:fs_followingInfo:urn:li:member:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
      followerCount: 432,
      $recipeTypes: [
        'com.linkedin.deco.recipe.anonymous.Anon89639392',
        'com.linkedin.deco.recipe.anonymous.Anon1760283115',
      ],
      $type: 'com.linkedin.voyager.dash.feed.FollowingState',
    },
    {
      selectedOptionType: 'HIGHLIGHTS',
      entityUrn:
        'urn:li:fsd_edgeSetting:urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
      title: 'Manage notifications from Israt',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon59726608'],
      $type:
        'com.linkedin.voyager.dash.identity.notifications.edgesetting.EdgeSetting',
    },
    {
      $anti_abuse_metadata: {
        '/degreeUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/schoolUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/fieldOfStudy': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/activities': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/companyUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/entityUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/standardizedFieldOfStudyUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/grade': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/fieldOfStudyUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/schoolName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/degreeName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/description': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
      },
      '*company': 'urn:li:fsd_company:13442796',
      companyUrn: 'urn:li:fsd_company:13442796',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon487759616'],
      schoolUrn: 'urn:li:fsd_school:3165045',
      $type: 'com.linkedin.voyager.dash.identity.profile.Education',
      entityUrn:
        'urn:li:fsd_profileEducation:(ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o,292168220)',
      '*school': 'urn:li:fsd_school:3165045',
      schoolName: 'Ahsanullah University of Science and Technology',
    },
    {
      multiLocaleCompanyName: { en_US: 'Grameenphone Ltd' },
      dateRange: {
        start: {
          month: 11,
          year: 2022,
          $recipeTypes: ['com.linkedin.voyager.dash.deco.common.Date'],
          $type: 'com.linkedin.common.Date',
        },
        $recipeTypes: ['com.linkedin.voyager.dash.deco.common.DateRange'],
        $type: 'com.linkedin.common.DateRange',
      },
      $anti_abuse_metadata: {
        '/hasSkillAssociations': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/shouldShowSourceOfHireBadge': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/employmentTypeUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/geoUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/regionUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/companyName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/companyUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/entityUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/geoLocationName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/title': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/locationName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/description': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
      },
      companyName: 'Grameenphone Ltd',
      '*company': 'urn:li:fsd_company:14043',
      companyUrn: 'urn:li:fsd_company:14043',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon1566936928'],
      $type: 'com.linkedin.voyager.dash.identity.profile.Position',
      entityUrn:
        'urn:li:fsd_profilePosition:(ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o,2073348233)',
    },
    {
      profilePicture: {
        a11yText: 'Amranul Islam Chowdhury',
        displayImageReference: {
          vectorImage: {
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
            ],
            rootUrl:
              'https://media.licdn.com/dms/image/D5603AQGgi6xDgFUKwA/profile-displayphoto-shrink_',
            artifacts: [
              {
                width: 100,
                $recipeTypes: [
                  'com.linkedin.voyager.dash.deco.common.VectorArtifact',
                ],
                fileIdentifyingUrlPathSegment:
                  '100_100/0/1669797814233?e=1694044800&v=beta&t=bG-vNT7PDCe8PCZfvq8Iul7045W3P07V4xfJ4XXFN24',
                expiresAt: 1694044800000,
                height: 100,
                $type: 'com.linkedin.common.VectorArtifact',
              },
              {
                width: 200,
                $recipeTypes: [
                  'com.linkedin.voyager.dash.deco.common.VectorArtifact',
                ],
                fileIdentifyingUrlPathSegment:
                  '200_200/0/1669797814233?e=1694044800&v=beta&t=BhqCPvvXM-4GVm34DpvudvPnj3DHPiGkcZd2Bvgo4_g',
                expiresAt: 1694044800000,
                height: 200,
                $type: 'com.linkedin.common.VectorArtifact',
              },
              {
                width: 400,
                $recipeTypes: [
                  'com.linkedin.voyager.dash.deco.common.VectorArtifact',
                ],
                fileIdentifyingUrlPathSegment:
                  '400_400/0/1669797814233?e=1694044800&v=beta&t=R8Xp7DbHcz9HNEqySlL0oB8SUiBKPvPd2WloXbgCgY4',
                expiresAt: 1694044800000,
                height: 400,
                $type: 'com.linkedin.common.VectorArtifact',
              },
              {
                width: 800,
                $recipeTypes: [
                  'com.linkedin.voyager.dash.deco.common.VectorArtifact',
                ],
                fileIdentifyingUrlPathSegment:
                  '800_800/0/1669797814233?e=1694044800&v=beta&t=vhqo4t7xiojNAc0-vNNCcZKJ4y70zIHutB2af4DqxzQ',
                expiresAt: 1694044800000,
                height: 800,
                $type: 'com.linkedin.common.VectorArtifact',
              },
            ],
            $type: 'com.linkedin.common.VectorImage',
          },
        },
        $recipeTypes: [
          'com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture',
        ],
        $type: 'com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture',
      },
      firstName: 'Amranul Islam',
      lastName: 'Chowdhury',
      entityUrn: 'urn:li:fsd_profile:ACoAAA4LFjQBWuYZ94o4q_w5e8VTJ8_ryT88eQg',
      $anti_abuse_metadata: {
        '/phoneticFirstName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/headlineGeneratedSuggestionDelegateUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/industryV2Urn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/tempStatus': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/defaultToActivityTab': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/companyNameOnProfileTopCardShown': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/summary': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/influencer': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/trackingId': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/address': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/objectUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/emailRequired': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/geoLocationBackfilled': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/versionTag': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/premium': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/headline': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/showPremiumSubscriberBadge': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/educationCardUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/experienceCardUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/locationName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/industryUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/educationOnProfileTopCardShown': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/trackingMemberId': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/lastName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/memorialized': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/tempStatusEmoji': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/entityUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/lastNamePronunciationHint': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/firstName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/firstNamePronunciationHint': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/phoneticLastName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/endorsementsEnabled': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/maidenName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/creator': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/student': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/iweWarned': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/imFollowsPromoLegoTrackingId': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
        '/publicIdentifier': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:235607604',
          },
        },
      },
      $recipeTypes: [
        'com.linkedin.voyager.dash.deco.common.text.ProfileForFullName',
        'com.linkedin.voyager.dash.deco.common.image.Profile',
      ],
      $type: 'com.linkedin.voyager.dash.identity.profile.Profile',
    },
    {
      lastName: 'Rahman',
      memorialized: false,
      $anti_abuse_metadata: {
        '/phoneticFirstName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/headlineGeneratedSuggestionDelegateUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/industryV2Urn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/tempStatus': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/defaultToActivityTab': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/companyNameOnProfileTopCardShown': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/summary': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/influencer': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/trackingId': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/address': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/objectUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/emailRequired': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/geoLocationBackfilled': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/versionTag': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/premium': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/headline': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/showPremiumSubscriberBadge': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/educationCardUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/experienceCardUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/locationName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/industryUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/educationOnProfileTopCardShown': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/trackingMemberId': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/lastName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/memorialized': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/tempStatusEmoji': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/entityUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/lastNamePronunciationHint': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/firstName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/firstNamePronunciationHint': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/phoneticLastName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/endorsementsEnabled': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/maidenName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/creator': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/student': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/iweWarned': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/imFollowsPromoLegoTrackingId': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
        '/publicIdentifier': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:144479690',
          },
        },
      },
      iweWarned: false,
      tempStatusEmoji: null,
      $recipeTypes: [
        'com.linkedin.deco.recipe.anonymous.Anon1976702492',
        'com.linkedin.voyager.dash.deco.relationships.ProfileWithIweWarned',
      ],
      $type: 'com.linkedin.voyager.dash.identity.profile.Profile',
      firstName: 'Sehabur',
      entityUrn: 'urn:li:fsd_profile:ACoAAAiclcoBW8M0fw3x7fCR2gsx2VzftQtGkOI',
      tempStatus: null,
      headline: 'Full Stack Web Application Developer',
      publicIdentifier: 'sehabur-rahman-b2247640',
    },
    {
      lastName: 'Jahan',
      memorialized: false,
      $anti_abuse_metadata: {
        '/phoneticFirstName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/headlineGeneratedSuggestionDelegateUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/industryV2Urn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/tempStatus': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/defaultToActivityTab': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/companyNameOnProfileTopCardShown': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/summary': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/influencer': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/trackingId': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/address': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/objectUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/emailRequired': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/geoLocationBackfilled': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/versionTag': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/premium': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/headline': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/showPremiumSubscriberBadge': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/educationCardUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/experienceCardUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/locationName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/industryUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/educationOnProfileTopCardShown': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/trackingMemberId': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/lastName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/memorialized': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/tempStatusEmoji': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/entityUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/lastNamePronunciationHint': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/firstName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/firstNamePronunciationHint': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/phoneticLastName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/endorsementsEnabled': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/maidenName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/creator': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/student': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/iweWarned': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/imFollowsPromoLegoTrackingId': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
        '/publicIdentifier': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:366667493',
          },
        },
      },
      '*profileVideoPreview':
        'urn:li:collectionResponse:+hw6+UrPxI7HwE0j/lntOsjpWgjQz6h533YmGXalMKY=',
      tempStatusEmoji: null,
      creatorWebsite: null,
      multiLocaleFullNamePronunciationAudio: {},
      entityUrn: 'urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
      '*profileRingStatusCollection':
        'urn:li:collectionResponse:Xe+I1V9S4RWH9BtivNAMxC2Yeb0M8EYnTliRLpsthQ0=',
      companyNameOnProfileTopCardShown: true,
      profileVideoUnion: null,
      '*connections':
        'urn:li:collectionResponse:tQR4myPUvGGItN96N/dJvlw1jiXkj/phkPvoJNGN+7k=',
      headline:
        'Technology Enthusiastic | Product Owner | Product Manager | OTT Specialist | Design Thinker',
      publicIdentifier: 'isratjahan01',
      profileStatefulProfileActions: {
        secondaryActionResolutionResult: {
          '*composeOption':
            'urn:li:fsd_composeOption:(ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o,NON_SELF_PROFILE_VIEW,EMPTY_CONTEXT_ENTITY_URN)',
        },
        primaryAction: {
          statefulAction: {
            actionDataModelUnion: {
              relationshipActionData: {
                relationshipsTrackingId: 'ùHnìFG&ºÅMÓ·',
                relationshipData: {
                  '*connectionOrInvitation':
                    'urn:li:fsd_memberRelationship:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
                },
                $recipeTypes: [
                  'com.linkedin.voyager.dash.deco.common.ux.RelationshipActionData',
                ],
                relationshipDataUnion: {
                  connectionOrInvitation:
                    'urn:li:fsd_memberRelationship:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
                },
                $type:
                  'com.linkedin.voyager.dash.common.relationships.RelationshipActionData',
              },
            },
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.ux.StatefulButtonModel',
            ],
            emphasisStyle: 'CRITICAL',
            $type:
              'com.linkedin.voyager.dash.common.ux.button.StatefulButtonModel',
          },
        },
        secondaryAction: {
          composeOption:
            'urn:li:fsd_composeOption:(ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o,NON_SELF_PROFILE_VIEW,EMPTY_CONTEXT_ENTITY_URN)',
        },
        overflowActions: [
          {
            shareProfileUrlViaMessage:
              'https://www.linkedin.com/in/isratjahan01',
          },
          {
            saveToPdfUrl:
              'https://www.linkedin.com/profile/pdf?id=ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o&locale=en_US&authType=name&authToken=WeSU&disablePdfCompression=true&trk=pdf_pro_full',
          },
          {
            followingState:
              'urn:li:fsd_followingState:urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
          },
          {
            personalizedConnect:
              'urn:li:fsd_memberRelationship:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
          },
          {
            report: {
              targetUrn: 'urn:li:member:366667493',
              contentSource: 'PROFILE',
              authorProfileId: 'ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
              $recipeTypes: [
                'com.linkedin.deco.recipe.anonymous.Anon743120773',
              ],
              $type:
                'com.linkedin.voyager.dash.common.semaphore.SemaphoreContext',
            },
          },
        ],
        overflowActionsResolutionResults: {
          2: {
            '*followingState':
              'urn:li:fsd_followingState:urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
          },
          3: {
            '*personalizedConnect':
              'urn:li:fsd_memberRelationship:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
          },
        },
        $recipeTypes: [
          'com.linkedin.voyager.dash.deco.identity.profile.ProfileActionsWithSupplementaryInjection',
        ],
        $type:
          'com.linkedin.voyager.dash.identity.profile.actions.ProfileActions',
      },
      fullNamePronunciationAudio: null,
      '*profileTopCardCustomAction':
        'urn:li:collectionResponse:Fe9FczogO79N9drabyuQh7RwqgCKg33J5+xJ5jJlUAw=',
      '*profileInsight':
        'urn:li:collectionResponse:ELu8+LuoO1AFNK54V7YVQ/rJ6E3jFXgZ6/F+JvW3Szg=',
      imFollowsPromoLegoTrackingId: null,
      educationOnProfileTopCardShown: true,
      $recipeTypes: [
        'com.linkedin.deco.recipe.anonymous.Anon587401631',
        'com.linkedin.voyager.dash.deco.relationships.ProfileWithEmailRequired',
        'com.linkedin.deco.recipe.anonymous.Anon352881287',
        'com.linkedin.voyager.dash.deco.identity.profile.TopCardSupplementary',
      ],
      $type: 'com.linkedin.voyager.dash.identity.profile.Profile',
      '*edgeSetting':
        'urn:li:fsd_edgeSetting:urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
      associatedHashtagsCopy: null,
      firstName: 'Israt',
      '*profileTopPosition':
        'urn:li:collectionResponse:3g6dWOzURVH5qQ5Z7+rz+9yRQVRBkjPUtEOtk3EabjQ=',
      '*topCardCallouts':
        'urn:li:collectionResponse:9I9D6ZmP2NiTFp4zPXkPtMBn3De9BHB3oHAB03Wq3OI=',
      tempStatus: null,
      creatorBadgeStatus: 'INELIGIBLE',
      location: {
        $recipeTypes: [
          'com.linkedin.voyager.dash.deco.identity.profile.ProfileLocation',
        ],
        countryCode: 'bd',
        $type: 'com.linkedin.voyager.dash.identity.profile.ProfileLocation',
      },
      '*profileTopEducation':
        'urn:li:collectionResponse:RRR/GPLr+5IX9eiYY/lXS19i/FN7XXXsid0xbfczRFs=',
      '*followingState':
        'urn:li:fsd_followingState:urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
      emailRequired: false,
    },
    {
      profilePicture: {
        a11yText: 'Minar Munasib',
        displayImageReference: {
          vectorImage: {
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
            ],
            rootUrl:
              'https://media.licdn.com/dms/image/D5603AQE8S8VrvPGHMA/profile-displayphoto-shrink_',
            artifacts: [
              {
                width: 100,
                $recipeTypes: [
                  'com.linkedin.voyager.dash.deco.common.VectorArtifact',
                ],
                fileIdentifyingUrlPathSegment:
                  '100_100/0/1672393886909?e=1694044800&v=beta&t=tc4yPV2LpUCg7v5bQeR490O4WozRgPPM-7hZtX3POns',
                expiresAt: 1694044800000,
                height: 100,
                $type: 'com.linkedin.common.VectorArtifact',
              },
              {
                width: 200,
                $recipeTypes: [
                  'com.linkedin.voyager.dash.deco.common.VectorArtifact',
                ],
                fileIdentifyingUrlPathSegment:
                  '200_200/0/1672393886909?e=1694044800&v=beta&t=Kz9Yy6FfCrG1V9fVuAwjTavDgKjRnOVF-S7Ldo07yKw',
                expiresAt: 1694044800000,
                height: 200,
                $type: 'com.linkedin.common.VectorArtifact',
              },
              {
                width: 400,
                $recipeTypes: [
                  'com.linkedin.voyager.dash.deco.common.VectorArtifact',
                ],
                fileIdentifyingUrlPathSegment:
                  '400_400/0/1672393886909?e=1694044800&v=beta&t=WPOGvAtAJFxJQkgud91EoHCW-Y8gmflnHls8yxLhiW0',
                expiresAt: 1694044800000,
                height: 400,
                $type: 'com.linkedin.common.VectorArtifact',
              },
              {
                width: 800,
                $recipeTypes: [
                  'com.linkedin.voyager.dash.deco.common.VectorArtifact',
                ],
                fileIdentifyingUrlPathSegment:
                  '800_800/0/1672393886909?e=1694044800&v=beta&t=vvFP8ZRw-YVAEupccYoXM03JCO1TwrvLkAUzdZTUlqM',
                expiresAt: 1694044800000,
                height: 800,
                $type: 'com.linkedin.common.VectorArtifact',
              },
            ],
            $type: 'com.linkedin.common.VectorImage',
          },
        },
        $recipeTypes: [
          'com.linkedin.voyager.dash.deco.common.image.PhotoFilterPicture',
        ],
        $type: 'com.linkedin.voyager.dash.identity.profile.PhotoFilterPicture',
      },
      firstName: 'Minar',
      lastName: 'Munasib',
      entityUrn: 'urn:li:fsd_profile:ACoAACBqnmQBNefXNdyQ1ZXqMmrgKFrRO7P9ukI',
      $anti_abuse_metadata: {
        '/phoneticFirstName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/headlineGeneratedSuggestionDelegateUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/industryV2Urn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/tempStatus': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/defaultToActivityTab': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/companyNameOnProfileTopCardShown': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/summary': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/influencer': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/trackingId': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/address': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/objectUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/emailRequired': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/geoLocationBackfilled': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/versionTag': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/premium': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/headline': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/showPremiumSubscriberBadge': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/educationCardUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/experienceCardUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/locationName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/industryUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/educationOnProfileTopCardShown': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/trackingMemberId': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/lastName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/memorialized': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/tempStatusEmoji': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/entityUrn': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/lastNamePronunciationHint': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/firstName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/firstNamePronunciationHint': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/phoneticLastName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/endorsementsEnabled': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/maidenName': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/creator': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/student': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/iweWarned': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/imFollowsPromoLegoTrackingId': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
        '/publicIdentifier': {
          sourceUrns: {
            'com.linkedin.common.urn.MemberUrn': 'urn:li:member:543858276',
          },
        },
      },
      $recipeTypes: [
        'com.linkedin.voyager.dash.deco.common.text.ProfileForFullName',
        'com.linkedin.voyager.dash.deco.common.image.Profile',
      ],
      $type: 'com.linkedin.voyager.dash.identity.profile.Profile',
    },
    {
      displayText: {
        textDirection: 'USER_LOCALE',
        text: 'Message',
        attributesV2: [],
        accessibilityText: 'Message with Premium',
        $recipeTypes: [
          'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
        ],
        $type: 'com.linkedin.voyager.dash.common.text.TextViewModel',
      },
      icon: {
        attributes: [
          {
            detailDataUnion: { icon: 'IC_LOCK_16DP' },
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.image.ImageAttribute',
            ],
            $type: 'com.linkedin.voyager.dash.common.image.ImageAttribute',
          },
        ],
        $recipeTypes: [
          'com.linkedin.voyager.dash.deco.common.image.ImageViewModel',
        ],
        $type: 'com.linkedin.voyager.dash.common.image.ImageViewModel',
      },
      composeNavigationContext: {
        recipient: {
          '*urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o':
            'urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
        },
        recipientUrns: [
          'urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
        ],
        targetUrl:
          'https://www.linkedin.com/premium/upsell?channel=INMAIL&premiumUpsellSlotUrn=urn%3Ali%3Afsd_premiumUpsellSlot%3APROFILE_MESSAGE_ACTION&profileUrn=urn%3Ali%3Afsd_profile%3AACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
        $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon199392175'],
        $type:
          'com.linkedin.voyager.dash.messaging.compose.ComposeNavigationContext',
      },
      composeOptionType: 'UPSELL',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon545512017'],
      $type: 'com.linkedin.voyager.dash.messaging.compose.ComposeOption',
      entityUrn:
        'urn:li:fsd_composeOption:(ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o,NON_SELF_PROFILE_VIEW,EMPTY_CONTEXT_ENTITY_URN)',
      textStartIcon: {
        attributes: [
          {
            detailDataUnion: { icon: 'IC_LOCK_16DP' },
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.image.ImageAttribute',
            ],
            $type: 'com.linkedin.voyager.dash.common.image.ImageAttribute',
          },
        ],
        $recipeTypes: [
          'com.linkedin.voyager.dash.deco.common.image.ImageViewModel',
        ],
        $type: 'com.linkedin.voyager.dash.common.image.ImageViewModel',
      },
    },
    {
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon1226238669'],
      url: 'https://www.linkedin.com/company/grameenphone-ltd/',
      $type: 'com.linkedin.voyager.dash.organization.Company',
      entityUrn: 'urn:li:fsd_company:14043',
      name: 'Grameenphone Ltd',
      logo: {
        vectorImage: {
          $recipeTypes: [
            'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
          ],
          rootUrl:
            'https://media.licdn.com/dms/image/C510BAQEdQ6SHZENdMQ/company-logo_',
          artifacts: [
            {
              width: 200,
              $recipeTypes: [
                'com.linkedin.voyager.dash.deco.common.VectorArtifact',
              ],
              fileIdentifyingUrlPathSegment:
                '200_200/0/1562066071704?e=1696464000&v=beta&t=-4pbWZ_k5vKvavXOLjBvlIGK6vQ7BReY7CD59CIX-5Q',
              expiresAt: 1696464000000,
              height: 200,
              $type: 'com.linkedin.common.VectorArtifact',
            },
            {
              width: 100,
              $recipeTypes: [
                'com.linkedin.voyager.dash.deco.common.VectorArtifact',
              ],
              fileIdentifyingUrlPathSegment:
                '100_100/0/1562066071704?e=1696464000&v=beta&t=xnExkxhTAj3hLM8cXELG3e6EAS95RDjHMnryc_tCh8A',
              expiresAt: 1696464000000,
              height: 100,
              $type: 'com.linkedin.common.VectorArtifact',
            },
            {
              width: 400,
              $recipeTypes: [
                'com.linkedin.voyager.dash.deco.common.VectorArtifact',
              ],
              fileIdentifyingUrlPathSegment:
                '400_400/0/1562066071704?e=1696464000&v=beta&t=vzmcj36F2KZ5PFcPcWNER6jkT27dVGYNMlpmDdmS-VQ',
              expiresAt: 1696464000000,
              height: 400,
              $type: 'com.linkedin.common.VectorArtifact',
            },
          ],
          $type: 'com.linkedin.common.VectorImage',
        },
      },
      universalName: 'grameenphone-ltd',
    },
    {
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon1226238669'],
      url: 'https://www.linkedin.com/school/ahsanullah-university-of-science-and-technology/',
      $type: 'com.linkedin.voyager.dash.organization.Company',
      entityUrn: 'urn:li:fsd_company:13442796',
      name: 'Ahsanullah University of Science and Technology',
      logo: {
        vectorImage: {
          $recipeTypes: [
            'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
          ],
          rootUrl:
            'https://media.licdn.com/dms/image/C560BAQF7hlh0RoBBSg/company-logo_',
          artifacts: [
            {
              width: 200,
              $recipeTypes: [
                'com.linkedin.voyager.dash.deco.common.VectorArtifact',
              ],
              fileIdentifyingUrlPathSegment:
                '200_200/0/1519906659730?e=1696464000&v=beta&t=ZKTEaRueZ-zOy1H-yLIh_s8C9WXVSGvXBXkxoJ-7QgM',
              expiresAt: 1696464000000,
              height: 200,
              $type: 'com.linkedin.common.VectorArtifact',
            },
            {
              width: 100,
              $recipeTypes: [
                'com.linkedin.voyager.dash.deco.common.VectorArtifact',
              ],
              fileIdentifyingUrlPathSegment:
                '100_100/0/1519906659730?e=1696464000&v=beta&t=d4YoluoCMwtvMGeN5AZZzF1Y1sNN55PONBdp0C-j7zo',
              expiresAt: 1696464000000,
              height: 100,
              $type: 'com.linkedin.common.VectorArtifact',
            },
            {
              width: 400,
              $recipeTypes: [
                'com.linkedin.voyager.dash.deco.common.VectorArtifact',
              ],
              fileIdentifyingUrlPathSegment:
                '400_400/0/1519906659730?e=1696464000&v=beta&t=bdo3ekZzZxXBYZqKTXN4zkSCNd7Jg1w0oznOXDxKOcY',
              expiresAt: 1696464000000,
              height: 400,
              $type: 'com.linkedin.common.VectorArtifact',
            },
          ],
          $type: 'com.linkedin.common.VectorImage',
        },
      },
      universalName: 'ahsanullah-university-of-science-and-technology',
    },
    {
      entityUrn: 'urn:li:fsd_school:3165045',
      name: 'Ahsanullah University of Science and Technology',
      logo: {
        vectorImage: {
          $recipeTypes: [
            'com.linkedin.voyager.dash.deco.common.VectorImageOnlyRootUrlAndAttribution',
          ],
          rootUrl:
            'https://media.licdn.com/dms/image/C560BAQF7hlh0RoBBSg/company-logo_',
          artifacts: [
            {
              width: 200,
              $recipeTypes: [
                'com.linkedin.voyager.dash.deco.common.VectorArtifact',
              ],
              fileIdentifyingUrlPathSegment:
                '200_200/0/1519906659730?e=1696464000&v=beta&t=ZKTEaRueZ-zOy1H-yLIh_s8C9WXVSGvXBXkxoJ-7QgM',
              expiresAt: 1696464000000,
              height: 200,
              $type: 'com.linkedin.common.VectorArtifact',
            },
            {
              width: 100,
              $recipeTypes: [
                'com.linkedin.voyager.dash.deco.common.VectorArtifact',
              ],
              fileIdentifyingUrlPathSegment:
                '100_100/0/1519906659730?e=1696464000&v=beta&t=d4YoluoCMwtvMGeN5AZZzF1Y1sNN55PONBdp0C-j7zo',
              expiresAt: 1696464000000,
              height: 100,
              $type: 'com.linkedin.common.VectorArtifact',
            },
            {
              width: 400,
              $recipeTypes: [
                'com.linkedin.voyager.dash.deco.common.VectorArtifact',
              ],
              fileIdentifyingUrlPathSegment:
                '400_400/0/1519906659730?e=1696464000&v=beta&t=bdo3ekZzZxXBYZqKTXN4zkSCNd7Jg1w0oznOXDxKOcY',
              expiresAt: 1696464000000,
              height: 400,
              $type: 'com.linkedin.common.VectorArtifact',
            },
          ],
          $type: 'com.linkedin.common.VectorImage',
        },
      },
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon1621960601'],
      url: 'https://www.linkedin.com/school/ahsanullah-university-of-science-and-technology/',
      $type: 'com.linkedin.voyager.dash.organization.School',
    },
    {
      entityUrn:
        'urn:li:fsd_connection:ACoAAAAVWAQB8MIQG7kvftDDFBWaCTz0nX2wT-g',
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon2134644859'],
      $type: 'com.linkedin.voyager.dash.relationships.Connection',
    },
    {
      entityUrn:
        'urn:li:fsd_relInsight:(urn:li:fsd_profile:ACoAAAiclcoBW8M0fw3x7fCR2gsx2VzftQtGkOI,urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o,PROFILE)',
      insightImage: {
        attributes: [
          {
            detailData: {
              '*profilePicture':
                'urn:li:fsd_profile:ACoAACBqnmQBNefXNdyQ1ZXqMmrgKFrRO7P9ukI',
            },
            detailDataUnion: {
              profilePicture:
                'urn:li:fsd_profile:ACoAACBqnmQBNefXNdyQ1ZXqMmrgKFrRO7P9ukI',
            },
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.image.ImageAttribute',
            ],
            $type: 'com.linkedin.voyager.dash.common.image.ImageAttribute',
          },
          {
            detailData: {
              '*profilePicture':
                'urn:li:fsd_profile:ACoAAA4LFjQBWuYZ94o4q_w5e8VTJ8_ryT88eQg',
            },
            detailDataUnion: {
              profilePicture:
                'urn:li:fsd_profile:ACoAAA4LFjQBWuYZ94o4q_w5e8VTJ8_ryT88eQg',
            },
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.image.ImageAttribute',
            ],
            $type: 'com.linkedin.voyager.dash.common.image.ImageAttribute',
          },
        ],
        $recipeTypes: [
          'com.linkedin.voyager.dash.deco.common.image.ImageViewModel',
        ],
        $type: 'com.linkedin.voyager.dash.common.image.ImageViewModel',
      },
      sharedConnectionDetailTarget: null,
      navigationUrl:
        'https://www.linkedin.com/search/results/people/?facetNetwork=%22F%22&facetConnectionOf=%22ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o%22&origin=MEMBER_PROFILE_CANNED_SEARCH',
      text: {
        textDirection: 'USER_LOCALE',
        text: 'Minar Munasib, Amranul Islam Chowdhury, and 3 other mutual connections',
        attributesV2: [
          {
            detailDataUnion: {
              profileFullName:
                'urn:li:fsd_profile:ACoAACBqnmQBNefXNdyQ1ZXqMmrgKFrRO7P9ukI',
            },
            start: 0,
            length: 13,
            detailData: {
              '*profileFullName':
                'urn:li:fsd_profile:ACoAACBqnmQBNefXNdyQ1ZXqMmrgKFrRO7P9ukI',
            },
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.text.TextAttributeV2',
            ],
            $type: 'com.linkedin.voyager.dash.common.text.TextAttribute',
          },
          {
            detailDataUnion: { style: 'BOLD' },
            start: 0,
            length: 13,
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.text.TextAttributeV2',
            ],
            $type: 'com.linkedin.voyager.dash.common.text.TextAttribute',
          },
          {
            detailDataUnion: {
              profileFullName:
                'urn:li:fsd_profile:ACoAAA4LFjQBWuYZ94o4q_w5e8VTJ8_ryT88eQg',
            },
            start: 15,
            length: 23,
            detailData: {
              '*profileFullName':
                'urn:li:fsd_profile:ACoAAA4LFjQBWuYZ94o4q_w5e8VTJ8_ryT88eQg',
            },
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.text.TextAttributeV2',
            ],
            $type: 'com.linkedin.voyager.dash.common.text.TextAttribute',
          },
          {
            detailDataUnion: { style: 'BOLD' },
            start: 15,
            length: 23,
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.text.TextAttributeV2',
            ],
            $type: 'com.linkedin.voyager.dash.common.text.TextAttribute',
          },
        ],
        accessibilityTextAttributesV2: [
          {
            detailDataUnion: {
              profileFullName:
                'urn:li:fsd_profile:ACoAACBqnmQBNefXNdyQ1ZXqMmrgKFrRO7P9ukI',
            },
            start: 0,
            length: 13,
            detailData: {
              '*profileFullName':
                'urn:li:fsd_profile:ACoAACBqnmQBNefXNdyQ1ZXqMmrgKFrRO7P9ukI',
            },
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.text.TextAttributeV2',
            ],
            $type: 'com.linkedin.voyager.dash.common.text.TextAttribute',
          },
          {
            detailDataUnion: { style: 'BOLD' },
            start: 0,
            length: 13,
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.text.TextAttributeV2',
            ],
            $type: 'com.linkedin.voyager.dash.common.text.TextAttribute',
          },
          {
            detailDataUnion: {
              profileFullName:
                'urn:li:fsd_profile:ACoAAA4LFjQBWuYZ94o4q_w5e8VTJ8_ryT88eQg',
            },
            start: 15,
            length: 23,
            detailData: {
              '*profileFullName':
                'urn:li:fsd_profile:ACoAAA4LFjQBWuYZ94o4q_w5e8VTJ8_ryT88eQg',
            },
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.text.TextAttributeV2',
            ],
            $type: 'com.linkedin.voyager.dash.common.text.TextAttribute',
          },
          {
            detailDataUnion: { style: 'BOLD' },
            start: 15,
            length: 23,
            $recipeTypes: [
              'com.linkedin.voyager.dash.deco.common.text.TextAttributeV2',
            ],
            $type: 'com.linkedin.voyager.dash.common.text.TextAttribute',
          },
        ],
        accessibilityText:
          'Minar Munasib, Amranul Islam Chowdhury, and 3 other mutual connections',
        $recipeTypes: [
          'com.linkedin.voyager.dash.deco.common.text.TextViewModelV2',
        ],
        $type: 'com.linkedin.voyager.dash.common.text.TextViewModel',
      },
      $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon2036460800'],
      $type: 'com.linkedin.voyager.dash.relationships.Insight',
    },
    {
      memberRelationshipUnion: {
        noConnection: {
          memberDistance: 'DISTANCE_2',
          $recipeTypes: [
            'com.linkedin.voyager.dash.deco.relationships.NoConnection',
            'com.linkedin.deco.recipe.anonymous.Anon2058972220',
          ],
          invitationUnion: {
            noInvitation: {
              '*targetInviteeResolutionResult':
                'urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
              inviter:
                'urn:li:fsd_profile:ACoAAAiclcoBW8M0fw3x7fCR2gsx2VzftQtGkOI',
              targetInvitee:
                'urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
              $recipeTypes: [
                'com.linkedin.deco.recipe.anonymous.Anon412783727',
                'com.linkedin.deco.recipe.anonymous.Anon1031101697',
              ],
              $type:
                'com.linkedin.voyager.dash.relationships.invitation.NoInvitation',
              '*inviterResolutionResult':
                'urn:li:fsd_profile:ACoAAAiclcoBW8M0fw3x7fCR2gsx2VzftQtGkOI',
            },
          },
          $type: 'com.linkedin.voyager.dash.relationships.NoConnection',
        },
      },
      entityUrn:
        'urn:li:fsd_memberRelationship:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
      memberRelationshipData: {
        noInvitation: {
          '*targetInviteeResolutionResult':
            'urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
          inviter: 'urn:li:fsd_profile:ACoAAAiclcoBW8M0fw3x7fCR2gsx2VzftQtGkOI',
          targetInvitee:
            'urn:li:fsd_profile:ACoAABXa5uUBucBL85xvuP4E8KrT-fUVDRNsS1o',
          $recipeTypes: ['com.linkedin.deco.recipe.anonymous.Anon1031101697'],
          $type:
            'com.linkedin.voyager.dash.relationships.invitation.NoInvitation',
          '*inviterResolutionResult':
            'urn:li:fsd_profile:ACoAAAiclcoBW8M0fw3x7fCR2gsx2VzftQtGkOI',
        },
      },
      $recipeTypes: [
        'com.linkedin.voyager.dash.deco.relationships.MemberRelationshipV2',
        'com.linkedin.deco.recipe.anonymous.Anon4539795',
      ],
      $type: 'com.linkedin.voyager.dash.relationships.MemberRelationship',
    },
  ],
};
