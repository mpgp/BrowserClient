'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">MPGP BrowserClient</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link">AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountModule-83e76afe1978f384bd7d05079f060325"' : 'data-target="#xs-components-links-module-AccountModule-83e76afe1978f384bd7d05079f060325"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountModule-83e76afe1978f384bd7d05079f060325"' :
                                            'id="xs-components-links-module-AccountModule-83e76afe1978f384bd7d05079f060325"' }>
                                            <li class="link">
                                                <a href="components/MainErrorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainRootComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainRootComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainScrollToTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainScrollToTopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarAvatarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarAvatarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarMailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarMailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarNotificationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarNotificationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountRoutingModule.html" data-type="entity-link">AccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3deff2d1e35d1de6041af200f4b1e8ac"' : 'data-target="#xs-components-links-module-AppModule-3deff2d1e35d1de6041af200f4b1e8ac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3deff2d1e35d1de6041af200f4b1e8ac"' :
                                            'id="xs-components-links-module-AppModule-3deff2d1e35d1de6041af200f4b1e8ac"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-f913515f1e01e27023fe364c3ddd37ea"' : 'data-target="#xs-injectables-links-module-CoreModule-f913515f1e01e27023fe364c3ddd37ea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-f913515f1e01e27023fe364c3ddd37ea"' :
                                        'id="xs-injectables-links-module-CoreModule-f913515f1e01e27023fe364c3ddd37ea"' }>
                                        <li class="link">
                                            <a href="injectables/AccountService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AccountService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ErrorsLogger.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ErrorsLogger</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeneralModule.html" data-type="entity-link">GeneralModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GeneralModule-51ef222e92b64d89b78820c59bf56838"' : 'data-target="#xs-components-links-module-GeneralModule-51ef222e92b64d89b78820c59bf56838"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GeneralModule-51ef222e92b64d89b78820c59bf56838"' :
                                            'id="xs-components-links-module-GeneralModule-51ef222e92b64d89b78820c59bf56838"' }>
                                            <li class="link">
                                                <a href="components/MainErrorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainRootComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainRootComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainScrollToTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainScrollToTopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarAvatarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarAvatarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarMailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarMailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarNotificationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarNotificationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeneralRoutingModule.html" data-type="entity-link">GeneralRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link">MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainModule-3bd83da7599c2bc729880c372e52f033"' : 'data-target="#xs-components-links-module-MainModule-3bd83da7599c2bc729880c372e52f033"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-3bd83da7599c2bc729880c372e52f033"' :
                                            'id="xs-components-links-module-MainModule-3bd83da7599c2bc729880c372e52f033"' }>
                                            <li class="link">
                                                <a href="components/MainErrorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainRootComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainRootComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainScrollToTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainScrollToTopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarAvatarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarAvatarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarMailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarMailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarNotificationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarNotificationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainRoutingModule.html" data-type="entity-link">MainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MpgpFormControlErrorModule.html" data-type="entity-link">MpgpFormControlErrorModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-MpgpFormControlErrorModule-a8f90b34027374235d0a99aa6297faa7"' : 'data-target="#xs-directives-links-module-MpgpFormControlErrorModule-a8f90b34027374235d0a99aa6297faa7"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-MpgpFormControlErrorModule-a8f90b34027374235d0a99aa6297faa7"' :
                                        'id="xs-directives-links-module-MpgpFormControlErrorModule-a8f90b34027374235d0a99aa6297faa7"' }>
                                        <li class="link">
                                            <a href="directives/MpgpFormControlErrorDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MpgpFormControlErrorDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link">ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-3ddc5336a32d1d93963a85ebe929a43e"' : 'data-target="#xs-components-links-module-ProfileModule-3ddc5336a32d1d93963a85ebe929a43e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-3ddc5336a32d1d93963a85ebe929a43e"' :
                                            'id="xs-components-links-module-ProfileModule-3ddc5336a32d1d93963a85ebe929a43e"' }>
                                            <li class="link">
                                                <a href="components/MainErrorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainRootComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainRootComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainScrollToTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainScrollToTopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarAvatarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarAvatarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarMailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarMailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarNotificationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarNotificationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link">ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link">SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-d4fa85ae7b6483fab7308f6d5d7f5eff"' : 'data-target="#xs-components-links-module-SettingsModule-d4fa85ae7b6483fab7308f6d5d7f5eff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-d4fa85ae7b6483fab7308f6d5d7f5eff"' :
                                            'id="xs-components-links-module-SettingsModule-d4fa85ae7b6483fab7308f6d5d7f5eff"' }>
                                            <li class="link">
                                                <a href="components/MainErrorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainRootComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainRootComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainScrollToTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainScrollToTopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarAvatarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarAvatarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarMailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarMailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainToolbarNotificationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainToolbarNotificationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SettingsModule-d4fa85ae7b6483fab7308f6d5d7f5eff"' : 'data-target="#xs-injectables-links-module-SettingsModule-d4fa85ae7b6483fab7308f6d5d7f5eff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SettingsModule-d4fa85ae7b6483fab7308f6d5d7f5eff"' :
                                        'id="xs-injectables-links-module-SettingsModule-d4fa85ae7b6483fab7308f6d5d7f5eff"' }>
                                        <li class="link">
                                            <a href="injectables/ManageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ManageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link">SettingsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AccountLoginFormComponent.html" data-type="entity-link">AccountLoginFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AccountLoginRootComponent.html" data-type="entity-link">AccountLoginRootComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AccountRegisterFormComponent.html" data-type="entity-link">AccountRegisterFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AccountRegisterRootComponent.html" data-type="entity-link">AccountRegisterRootComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GeneralRootComponent.html" data-type="entity-link">GeneralRootComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileCardComponent.html" data-type="entity-link">ProfileCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileCardContainerComponent.html" data-type="entity-link">ProfileCardContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileRootComponent.html" data-type="entity-link">ProfileRootComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileWallContainerComponent.html" data-type="entity-link">ProfileWallContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsAccountContainerComponent.html" data-type="entity-link">SettingsAccountContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsAccountDataFormComponent.html" data-type="entity-link">SettingsAccountDataFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsAccountPasswordFormComponent.html" data-type="entity-link">SettingsAccountPasswordFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsRootComponent.html" data-type="entity-link">SettingsRootComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccountDto.html" data-type="entity-link">AccountDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthInfo.html" data-type="entity-link">AuthInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/CacheService.html" data-type="entity-link">CacheService</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomValidators.html" data-type="entity-link">CustomValidators</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ErrorsHandler.html" data-type="entity-link">ErrorsHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ManageService.html" data-type="entity-link">ManageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LogoutGuard.html" data-type="entity-link">LogoutGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UnauthorizedGuard.html" data-type="entity-link">UnauthorizedGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthorizeAccountCommand.html" data-type="entity-link">AuthorizeAccountCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CacheContent.html" data-type="entity-link">CacheContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorWithContext.html" data-type="entity-link">ErrorWithContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormControlError.html" data-type="entity-link">FormControlError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HttpError.html" data-type="entity-link">HttpError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEnvironment.html" data-type="entity-link">IEnvironment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RegisterAccountCommand.html" data-type="entity-link">RegisterAccountCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateAccountCommand.html" data-type="entity-link">UpdateAccountCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdatePasswordCommand.html" data-type="entity-link">UpdatePasswordCommand</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});